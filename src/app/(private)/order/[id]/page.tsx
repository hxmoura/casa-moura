import Button from "@/components/Button";
import CheckoutContainer from "@/components/CheckoutContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Order() {
  return (
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
              <Button>Copiar número do boleto</Button>
              <Button style="secondary">Imprimir boleto</Button>
            </div>
          </CheckoutContainer>

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
                  b8ea220c-0226-4c9e-8f78-c38ff25047
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
                <p className="text-xs lg:text-sm">Rua ABC, 123 - São Paulo</p>
              </li>
            </ul>
            <Button>Acompanhar pedido</Button>
          </CheckoutContainer>
        </div>
      </main>
      <Footer type="short" />
    </div>
  );
}
