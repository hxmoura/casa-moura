"use client";

import { getOrder } from "@/api/queries/order";
import Button from "@/components/Button";
import CheckoutContainer from "@/components/CheckoutContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useFetcher from "@/hooks/useFetcher";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useCallback } from "react";
import CopyTextClipboard from "@/utils/copyText";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export default function Order({ params }: { params: { id: string } }) {
  const dataOrder = useCallback(() => getOrder(params.id), [params.id]);
  const { response, error } = useFetcher(dataOrder);
  const { user } = useUser();

  const router = useRouter();

  if (
    error ||
    (response && response.error) ||
    (response && response.data && user && response.data.userId !== user.uid)
  ) {
    return router.replace("/");
  }

  return (
    <>
      {response?.data && (
        <div className="flex flex-col min-h-svh bg-background-light lg:bg-transparent">
          <Header type="short" />
          <main className="lg:mt-16 lg:mb-24 flex-1 flex justify-center">
            <div className="lg:max-w-[548px] w-full space-y-3 lg:space-y-6">
              <section className="flex flex-col items-center space-y-5 mb-3 lg:mb-10 bg-white p-7 lg:p-0 lg:bg-transparent">
                <Icon
                  icon="lets-icons:check-fill"
                  className="w-12 h-12 lg:w-16 lg:h-16 text-notify-success"
                />
                <strong className="font-semibold text-lg lg:text-xl text-center">
                  Seu pedido foi concluído!
                </strong>
              </section>

              {response.data.paymentMethod === "bankSlip" && (
                <CheckoutContainer>
                  <div className="border-b border-background-softLight pb-5 mb-5">
                    <h4 className="font-semibold lg:text-xl">
                      Garanta seu pedido pagando o Boleto
                    </h4>
                  </div>

                  <ol>
                    <li className="text-xs lg:text-base">
                      1. Abra o aplicativo do seu banco
                    </li>
                    <li className="text-xs lg:text-base">
                      2. Escolha o pagamento por Boleto
                    </li>
                    <li className="text-xs lg:text-base">
                      3. Copie o número do boleto ou imprima
                    </li>
                  </ol>

                  <div className="mt-10 space-y-3">
                    <Button
                      onClick={() =>
                        CopyTextClipboard(response.data.details.barcode)
                      }
                    >
                      Copiar número do boleto
                    </Button>
                    <Button
                      style="secondary"
                      href={response.data.details.ticket}
                    >
                      Imprimir boleto
                    </Button>
                  </div>
                </CheckoutContainer>
              )}

              {response.data.paymentMethod === "pix" && (
                <CheckoutContainer>
                  <div className="border-b border-background-softLight pb-5 mb-5">
                    <h4 className="font-semibold lg:text-xl">
                      Garanta seu pedido pagando o Pix
                    </h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <ol>
                      <li className="text-xs lg:text-base">
                        1. Abra o aplicativo do seu banco
                      </li>
                      <li className="text-xs lg:text-base">
                        2. Escolha o pagamento por Pix
                      </li>
                      <li className="text-xs lg:text-base">
                        3. Escaneie o QR Code ou copie o código Pix
                      </li>
                    </ol>
                    <img
                      src={`data:image/jpeg;base64,${response.data.details.qrCode}`}
                      alt={response.data.details.barcode}
                      draggable={false}
                      className="w-28 h-28"
                    />
                  </div>
                  <div className="mt-10 space-y-3">
                    <Button
                      onClick={() =>
                        CopyTextClipboard(response.data.details.pix)
                      }
                    >
                      Copiar Pix
                    </Button>
                  </div>
                </CheckoutContainer>
              )}

              <CheckoutContainer>
                <div className="border-b border-background-softLight pb-5 mb-5">
                  <h4 className="font-semibold lg:text-xl">Resumo do pedido</h4>
                </div>
                <ul className="mb-10 space-y-3">
                  <li className="rounded p-5 bg-background-light space-y-2">
                    <strong className="font-medium text-sm lg:text-base">
                      Número do pedido
                    </strong>
                    <p className="text-xs lg:text-sm">
                      {response.data.orderId}
                    </p>
                  </li>
                  <li className="rounded p-5 bg-background-light space-y-2">
                    <strong className="font-medium text-sm lg:text-base">
                      Prazo de entrega
                    </strong>
                    <p className="text-xs lg:text-sm">
                      Entre 4 e 8 dias úteis após a confirmação do pagamento
                    </p>
                  </li>
                  <li className="rounded p-5 bg-background-light space-y-2">
                    <strong className="font-medium text-sm lg:text-base">
                      Endereço de entrega
                    </strong>
                    <p className="text-xs lg:text-sm">
                      {response.data.delivery.address},{" "}
                      {response.data.delivery.number} -{" "}
                      {response.data.delivery.city}
                    </p>
                  </li>
                </ul>
                <Button href="/">Acompanhar pedido</Button>
              </CheckoutContainer>
            </div>
          </main>
          <Footer type="short" />
        </div>
      )}
    </>
  );
}
