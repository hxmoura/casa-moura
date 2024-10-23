"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Delivery from "./components/Delivery";
import Payment from "./components/Payment";
import { FormStep } from "./types/form";
import { CardInformations, PaymentMethod } from "./types/payment";
import Summary from "./components/Summary";
import { Delivery as DeliveryType } from "./types/delivery";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function Checkout() {
  const router = useRouter();
  const { cart, isLoading, fetchProductsFromLocalStorage } = useCart();

  const [formStep, setFormStep] = useState<FormStep>("delivery");
  const [formEditing, setFormEditing] = useState<boolean>(false);

  const [deliveryData, setDeliveryData] = useState<DeliveryType | null>(null);
  const [paymentMethodData, setPaymentMethodData] =
    useState<PaymentMethod | null>(null);
  const [cardData, setCardData] = useState<CardInformations | null>(null);

  function handleFormEditing(value: boolean) {
    setFormEditing(value);
  }

  function handleFormStep(step: FormStep) {
    setFormStep(step);
  }

  function receivePaymentMethod(selectedPayment: PaymentMethod) {
    setPaymentMethodData(selectedPayment);
  }

  function receiveCardInformations(value: CardInformations) {
    setCardData(value);
  }

  function receiveDelivery(value: DeliveryType) {
    setDeliveryData(value);
  }

  useEffect(() => {
    fetchProductsFromLocalStorage();
  }, [fetchProductsFromLocalStorage]);

  useEffect(() => {
    if (!isLoading && cart.length === 0) {
      router.push("/cart");
    }
  }, [isLoading, cart, router]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {cart.length > 0 && (
        <div className="flex flex-col min-h-svh bg-background-light lg:bg-transparent">
          <Header type="short" />
          <main className="flex-1 lg:my-20">
            <Container noPadding>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
                <div className="flex flex-col gap-3 lg:gap-6 flex-1">
                  <Delivery
                    formStep={formStep}
                    paymentMethodData={paymentMethodData}
                    onFormStep={handleFormStep}
                    onReceiveDelivery={receiveDelivery}
                    onFormEditing={handleFormEditing}
                  />
                  <Payment
                    formStep={formStep}
                    paymentMethodData={paymentMethodData}
                    onFormStep={handleFormStep}
                    onReceivePaymentMethod={receivePaymentMethod}
                    onReceiveCardInformations={receiveCardInformations}
                    onFormEditing={handleFormEditing}
                  />
                </div>
                <Summary
                  paymentMethodData={paymentMethodData}
                  cardData={cardData}
                  deliveryData={deliveryData}
                  formEditing={formEditing}
                />
              </div>
            </Container>
          </main>
          <Footer type="short" />
        </div>
      )}
    </>
  );
}
