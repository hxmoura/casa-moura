import Container from "@/components/Container";
import Modal from "@/components/Modal";
import { Product } from "@/types/product";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dispatch, SetStateAction, useState } from "react";

enum PaymentMethods {
  "card" = "Cartão de crédito",
  "ticket" = "Boleto",
  "pix" = "Pix",
}

interface PaymentsModalProps {
  product: Product;
  isModalPaymentsVisible: boolean;
  setIsModalPaymentsVisible: Dispatch<SetStateAction<boolean>>;
}

export default function PaymentsModal({
  product,
  isModalPaymentsVisible,
  setIsModalPaymentsVisible,
}: PaymentsModalProps) {
  const [modalPaymentSelected, setModalPaymentSelected] = useState(
    PaymentMethods.card,
  );

  return (
    <Modal
      openModal={isModalPaymentsVisible}
      setOpenModal={setIsModalPaymentsVisible}
    >
      <div className="max-w-[648px] w-full rounded-lg lg:rounded-xl overflow-hidden mx-3">
        <header className="w-full h-16 bg-brand-primary flex items-center justify-between p-5">
          <h6 className="text-white font-medium text-sm lg:text-base">
            Formas de pagamento
          </h6>
          <button onClick={() => setIsModalPaymentsVisible(false)}>
            <Icon icon="heroicons:x-mark" className="w-6 h-6 text-white" />
          </button>
        </header>
        <div className="bg-white p-9">
          <div className="border-b border-background-softLight w-full flex gap-10 lg:gap-12 mb-10">
            <button
              onClick={() => setModalPaymentSelected(PaymentMethods.card)}
              className={`border-b-2 ${modalPaymentSelected === PaymentMethods.card ? "border-brand-secondary" : "border-transparent"} pb-3 lg:pb-4 text-xs lg:text-base`}
            >
              Cartão de crédito
            </button>
            <button
              onClick={() => setModalPaymentSelected(PaymentMethods.ticket)}
              className={`border-b-2 ${modalPaymentSelected === PaymentMethods.ticket ? "border-brand-secondary" : "border-transparent"} pb-3 lg:pb-4 text-xs lg:text-base`}
            >
              Boleto
            </button>
            <button
              onClick={() => setModalPaymentSelected(PaymentMethods.pix)}
              className={`border-b-2 ${modalPaymentSelected === PaymentMethods.pix ? "border-brand-secondary" : "border-transparent"} pb-3 lg:pb-4 text-xs lg:text-base`}
            >
              Pix
            </button>
          </div>
          {modalPaymentSelected === PaymentMethods.card && (
            <table className="border border-background-softLight rounded-lg w-full border-separate border-spacing-0">
              <tbody>
                {[...Array(12)].map((_, i) => (
                  <tr key={i} className="even:bg-background-softLight">
                    <td className="text-xs px-5 py-3">
                      {i + 1}x de{" "}
                      {currencyConverter(
                        product.promotionalPrice
                          ? product.promotionalPrice / (i + 1)
                          : product.price / (i + 1),
                      )}{" "}
                      sem juros
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {modalPaymentSelected === PaymentMethods.ticket && (
            <div>
              <strong className="font-medium text-sm lg:text-base">
                {currencyConverter(product.promotionalPrice || product.price)}
              </strong>
              <p className="text-xs lg:text-sm mt-5">
                O boleto será gerado ao final da compra, e pode levar até 3 dias
                úteis para ter o pagamento confirmado. A prazo de entrega começa
                a ser contado a partir da data de confirmação do pagamento.
              </p>
            </div>
          )}
          {modalPaymentSelected === PaymentMethods.pix && (
            <div>
              <strong className="font-medium text-sm lg:text-base">
                {currencyConverter(product.promotionalPrice || product.price)}
              </strong>
              <p className="text-xs lg:text-sm mt-5">
                O Pix é gerado automaticamente no final da compra, basta
                escanear o QR Code ou copiar o código para realizar o pagamento.
                A aprovação pode levar até 15 segundos.
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
