import Button from "@/components/Button";
import CheckoutContainer from "@/components/CheckoutContainer";
import InputText from "@/components/InputText";
import ProductSummary from "@/components/ProductSummary";
import { useCart } from "@/contexts/CartContext";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CardInformations, PaymentMethod } from "../types/payment";
import { Delivery } from "../types/delivery";
import dataValidate from "@/utils/dataValidate";
import { useUser } from "@/contexts/UserContext";
import { createOrder, createPayment } from "@/api/queries/order";
import fetcher from "@/utils/fetcher";

interface SummaryProps {
  paymentMethodData: PaymentMethod;
  cardData: CardInformations | null;
  deliveryData: Delivery;
  formEditing: boolean;
  onLoadingCheckout: (value: boolean) => void;
  loadingCheckout: boolean;
}

export default function Summary({
  paymentMethodData,
  cardData,
  deliveryData,
  formEditing,
  onLoadingCheckout,
  loadingCheckout,
}: SummaryProps) {
  const { cart, calculateCartTotal, handleResetCart } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const [showCupom, setShowCupom] = useState(false);
  const [cupom, setCupom] = useState("");

  async function handleOrderSubmit() {
    try {
      if (user) {
        onLoadingCheckout(true);

        const cpf = await fetcher("/api/crypto/decrypt", {
          method: "POST",
          body: JSON.stringify({ text: user.data.cpf }),
        });

        const pay = await createPayment({
          token: cardData?.token,
          price: calculateCartTotal(),
          paymentMethod: paymentMethodData,
          installments:
            paymentMethodData === "card" && cardData
              ? cardData.installments
              : 1,
          user: {
            id: user.uid,
            email: user.email!,
            name: user.data.name,
            lastname: user.data.lastName,
            cpf: cpf.decrypted,
            delivery: deliveryData,
          },
        });

        if (pay.data) {
          const cardPayApproved =
            pay.data.payment_type_id === "credit_card" &&
            pay.data.status === "approved";
          const pixPay = pay.data.payment_method_id === "pix";
          const ticketPay = pay.data.payment_method_id === "bolbradesco";

          if (cardPayApproved || pixPay || ticketPay) {
            await createOrder({
              payment: pay.data,
              paymentMethod: paymentMethodData,
              user,
              delivery: deliveryData,
              products: cart,
            });

            handleResetCart();
            router.push(`/order/${String(pay.data.id)}`);
            return;
          }
        }

        throw new Error("Payment not completed");
      }
    } catch (err) {
      console.log("Não foi possível concluir o pedido, tente novamente!");
      onLoadingCheckout(false);
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
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              placeholder="Digite seu cupom"
            />
            <Button disabled={!cupom} width={80}>
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
          !dataValidate(deliveryData) ||
          formEditing ||
          (paymentMethodData === "card" && !cardData?.token)
        }
        loading={loadingCheckout}
        installments={cardData?.installments}
        paymentMethod={paymentMethodData}
      />
    </CheckoutContainer>
  );
}
