import { createOrder } from "@/api/queries/user";
import Button from "@/components/Button";
import CheckoutContainer from "@/components/CheckoutContainer";
import InputText from "@/components/InputText";
import ProductSummary from "@/components/ProductSummary";
import { useCart } from "@/contexts/CartContext";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardInformations, PaymentMethod } from "../types/payment";
import { Delivery } from "../types/delivery";
import dataValidate from "@/utils/dataValidate";
import { useUser } from "@/contexts/UserContext";

interface SummaryProps {
  paymentMethodData: PaymentMethod | null;
  cardData: CardInformations | null;
  deliveryData: Delivery;
  formEditing: boolean;
}

export default function Summary({
  paymentMethodData,
  cardData,
  deliveryData,
  formEditing,
}: SummaryProps) {
  const { cart, calculateCartTotal } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const [showCupom, setShowCupom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleOrderSubmit() {
    try {
      if (
        paymentMethodData &&
        dataValidate(deliveryData!) &&
        !formEditing &&
        user
      ) {
        setIsLoading(true);
        const orderId = uuidv4();

        await createOrder(user.uid, {
          id: orderId,
          paymentMethod: paymentMethodData,
          installments:
            paymentMethodData === "card" && cardData
              ? cardData.installments
              : 1,
          delivery: deliveryData,
          price: calculateCartTotal(),
          products: cart.map((product) => ({
            id: product.id,
            quantity: product.quantityInCart,
            unitPrice: product.promotionalPrice || product.price,
          })),
          date: new Date().toLocaleDateString("pt-br"),
          time: new Date().toLocaleTimeString("pt-br"),
        });

        router.push(`/order/${orderId}`);
      }
    } catch {
      return console.log("Aconteceu algum erro!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CheckoutContainer className="lg:w-[424px] space-y-7">
      <div className="flex items-center gap-2">
        <Icon icon="solar:bill-list-linear" className="w-6 h-6 lg:w-7 lg:h-7" />
        <strong className="font-medium text-sm lg:text-lg">
          Resumo do pedido
        </strong>
      </div>
      <div
        className={`space-y-5 lg:max-h-60 h-full ${cart.length > 3 && "lg:overflow-y-scroll"}`}
      >
        {cart.map((product) => (
          <article key={product.id} className="flex items-center gap-3">
            <div className="relative min-w-14 min-h-14 max-w-14 max-h-14 rounded">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
                draggable={false}
              />
              <div className="absolute w-5 h-5 rounded-full bottom-0 right-0 bg-brand-secondary flex items-center justify-center">
                <span className="text-white font-medium text-xs">
                  {product.quantityInCart}
                </span>
              </div>
            </div>
            <p className="font-medium text-xs flex-1">{product.name}</p>
            <p className="ml-5 font-medium text-xs">
              {currencyConverter(product.promotionalPrice || product.price)}
            </p>
          </article>
        ))}
      </div>
      <div className="border-b border-dashed border-background-softLight"></div>
      <div
        className={`${showCupom ? "space-y-3" : "flex justify-between items-center"}`}
      >
        <div className="flex items-center gap-2">
          <Icon
            icon="solar:ticket-sale-linear"
            className="w-6 h-6 lg:w-7 lg:h-7"
          />
          <strong className="font-medium text-sm lg:text-base">Cupom</strong>
        </div>
        <button
          onClick={() => setShowCupom(true)}
          className={`text-notify-success text-sm font-medium hover:underline ${showCupom && "hidden"}`}
        >
          Aplicar
        </button>
        {showCupom && (
          <div className="flex items-center gap-3">
            <InputText
              value=""
              onChange={() => null}
              placeholder="Digite seu cupom"
            />
            <Button disabled width={80}>
              Aplicar
            </Button>
          </div>
        )}
      </div>
      <div className="border-b border-dashed border-background-softLight"></div>
      <ProductSummary
        onClick={handleOrderSubmit}
        disabled={
          !paymentMethodData ||
          !dataValidate(deliveryData!) ||
          (paymentMethodData === "card" && !dataValidate(cardData!)) ||
          formEditing
        }
        loading={isLoading}
        installments={cardData?.installments}
      />
    </CheckoutContainer>
  );
}
