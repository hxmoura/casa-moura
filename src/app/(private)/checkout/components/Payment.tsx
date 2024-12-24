import { Icon } from "@iconify/react/dist/iconify.js";
import CheckoutContainer from "@/components/CheckoutContainer";
import { FormEvent, useEffect, useState } from "react";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { useCart } from "@/contexts/CartContext";
import Button from "@/components/Button";
import InputRadio from "@/components/InputRadio";
import { FormStep } from "../types/form";
import { CardInformations, PaymentMethod } from "../types/payment";
import { createCardToken, initMercadoPago } from "@mercadopago/sdk-react";
import CardForm from "./CardForm";

interface PaymentProps {
  formStep: FormStep;
  onFormStep: (step: FormStep) => void;
  paymentMethodData: PaymentMethod | null;
  onReceivePaymentMethod: (method: PaymentMethod) => void;
  onReceiveCardInformations: (value: CardInformations) => void;
  onFormEditing: (value: boolean) => void;
  loadingCheckout: boolean;
}

export default function Payment({
  formStep,
  onFormStep,
  paymentMethodData,
  onReceivePaymentMethod,
  onReceiveCardInformations,
  onFormEditing,
  loadingCheckout,
}: PaymentProps) {
  const [paymentSelect, setPaymentSelect] = useState<PaymentMethod | null>(
    null,
  );
  const { calculateCartTotal } = useCart();
  const [emptyCardErrors, setEmptyCardErrors] = useState<boolean>(true);
  const [emptyCardInitialValue, setEmptyCardInitialValue] =
    useState<boolean>(true);

  const [cardData, setCardData] = useState<CardInformations>({
    name: "",
    token: "",
    installments: 1,
    lastFourDigits: "",
    flag: "noFlag",
  });

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MP_CLIENT_KEY || "");
  }, []);

  function handleEmptyCardErrors(value: boolean) {
    setEmptyCardErrors(value);
  }

  function handleEmptyCardInitialValue(value: boolean) {
    setEmptyCardInitialValue(value);
  }

  async function handleSubmitPayment(evt: FormEvent) {
    evt.preventDefault();

    if (paymentSelect) {
      if (paymentSelect === "card") {
        const cardToken = await createCardToken({
          cardholderName: cardData.name,
        });

        if (cardToken) {
          setCardData((prev) => ({
            ...prev,
            token: cardToken.id,
            lastFourDigits: cardToken.last_four_digits,
          }));

          onReceiveCardInformations({ ...cardData, token: cardToken.id });
        }
      }

      onReceivePaymentMethod(paymentSelect);
      onFormStep("summary");
      onFormEditing(false);
    }
  }

  const isPix = paymentSelect === "pix";
  const isCard = paymentSelect === "card";
  const isbankSlip = paymentSelect === "bankSlip";

  function handleEditPayment() {
    onFormEditing(true);
    onFormStep("payment");
  }

  return (
    <CheckoutContainer>
      <div className="flex items-center gap-2 mb-7">
        <div className="rounded-full w-6 h-6 lg:w-7 lg:h-7 bg-text-main flex justify-center items-center">
          <span className="text-white font-medium text-sm lg:text-base">2</span>
        </div>
        <h5 className="text-sm lg:text-lg font-medium">Métodos de pagamento</h5>
      </div>

      <form
        onSubmit={handleSubmitPayment}
        className={`${formStep === "payment" ? "block" : "hidden"}`}
      >
        <fieldset className="space-y-3">
          <div
            className={`flex flex-col bg-background-light rounded p-4 cursor-pointer border border-background-softLight ${isCard && "border-brand-secondary"}`}
            onClick={() => setPaymentSelect("card")}
          >
            <div className="flex items-center gap-5">
              <InputRadio
                name="payment"
                value="card"
                checked={isCard}
                onChange={() => setPaymentSelect("card")}
              />
              <label
                htmlFor="card"
                className="font-medium text-sm flex items-center gap-2 cursor-pointer"
              >
                <Icon icon="fxemoji:creditcard" className="w-7 h-7" />
                Cartão
              </label>
            </div>
            <div className={`${isCard ? "block" : "hidden"}`}>
              <CardForm
                onEmptyCardErrors={handleEmptyCardErrors}
                onEmptyCardInitialValue={handleEmptyCardInitialValue}
                setCardData={setCardData}
                cardData={cardData}
              />
            </div>
          </div>
          <div
            className={`flex items-center gap-5 bg-background-light rounded p-4 cursor-pointer border border-background-softLight ${isPix && "border-brand-secondary"}`}
            onClick={() => setPaymentSelect("pix")}
          >
            <InputRadio
              name="payment"
              value="pix"
              checked={isPix}
              onChange={() => setPaymentSelect("pix")}
            />
            <label
              htmlFor="pix"
              className="font-medium text-sm flex items-center gap-2 cursor-pointer"
            >
              <Icon icon="ic:baseline-pix" className="w-7 h-7 text-[#7AB7A9]" />
              Pix
            </label>
          </div>
          <div
            className={`flex items-center gap-5 bg-background-light rounded p-4 cursor-pointer border border-background-softLight ${isbankSlip && "border-brand-secondary"}`}
            onClick={() => setPaymentSelect("bankSlip")}
          >
            <InputRadio
              name="payment"
              value="bankSlip"
              checked={isbankSlip}
              onChange={() => setPaymentSelect("bankSlip")}
            />
            <label
              htmlFor="bankSlip"
              className="font-medium text-sm flex items-center gap-2 cursor-pointer"
            >
              <Icon icon="prime:barcode" className="w-7 h-7" />
              Boleto
            </label>
          </div>
        </fieldset>

        {paymentSelect && (
          <div className="mt-9">
            <Button
              type="submit"
              disabled={
                isCard
                  ? !cardData.installments ||
                    !cardData.name.trim() ||
                    (!cardData.token.trim() && !emptyCardInitialValue) ||
                    !emptyCardErrors
                  : false
              }
            >
              Selecionar pagamento no {isbankSlip && "Boleto"}
              {isCard && "Cartão"}
              {isPix && "Pix"}
            </Button>
          </div>
        )}
      </form>

      {formStep !== "payment" && (
        <>
          {paymentMethodData ? (
            <div>
              <div className="flex flex-col gap-2 mb-5">
                <span className="text-xs lg:text-sm">
                  <strong className="font-medium">Método:</strong>{" "}
                  {isbankSlip && "Boleto"}
                  {isPix && "Pix"}
                  {isCard && "Cartão"}
                </span>
                {paymentMethodData === "card" && (
                  <>
                    <span className="text-xs lg:text-sm">
                      <strong className="font-medium">Parcelas:</strong>{" "}
                      {cardData.installments}x de{" "}
                      {currencyConverter(
                        calculateCartTotal() / cardData.installments,
                      )}
                    </span>

                    <div className="flex gap-1 items-center">
                      <span className="text-xs lg:text-sm">
                        <strong className="font-medium">Cartão:</strong> final{" "}
                        {cardData.lastFourDigits}
                      </span>
                      <Icon icon={cardData.flag} className="w-10" />
                    </div>
                  </>
                )}
              </div>
              <Button
                style="outline"
                onClick={handleEditPayment}
                disabled={loadingCheckout}
              >
                Alterar pagamento
              </Button>
            </div>
          ) : (
            <p className="text-xs lg:text-sm text-text-light">
              Preencha as informações de entrega para escolher o método de
              pagamento!
            </p>
          )}
        </>
      )}
    </CheckoutContainer>
  );
}
