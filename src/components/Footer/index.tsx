"use client";

import Container from "@/components/Container";
import Section from "./components/Section";
import Social from "./components/Social";
import PaymentIcon from "./components/PaymentIcon";
import Newsletter from "./components/Newsletter";
import Option from "./components/Option";
import Link from "next/link";

interface FooterProps {
  type?: "default" | "short";
}

export default function Footer({ type = "default" }: FooterProps) {
  return (
    <>
      {type === "short" ? (
        <footer className="bg-background-light py-7">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-7">
              <ul className="flex items-center gap-5 flex-wrap w-full md:w-auto">
                <PaymentIcon icon="logos:mastercard" width={36} height={28} />
                <PaymentIcon icon="logos:visa" width={48} height={16} />
                <PaymentIcon icon="logos:elo" width={48} height={20} />
                <PaymentIcon icon="logos:hipercard" width={56} height={24} />
                <PaymentIcon icon="ph:barcode-fill" width={32} height={32} />
                <PaymentIcon
                  icon="ic:outline-pix"
                  width={32}
                  height={32}
                  color="#7AB7A9"
                />
              </ul>
              <div>
                <p className="text-xs text-text-light mb-3 md:mb-1 md:text-center lg:text-right">
                  Precisa de ajuda? Acesse a página de{" "}
                  <Link href="#" className="text-text-main hover:underline">
                    atendimento
                  </Link>{" "}
                  ou confira os{" "}
                  <Link href="#" className="text-text-main hover:underline">
                    termos e condições
                  </Link>
                  .
                </p>
                <p className="text-xs text-text-light md:text-center lg:text-right">
                  Preços e condições para o site casamoura.com.br, podem sofrer
                  alterações sem prévia notificação.
                </p>
              </div>
            </div>
          </Container>
        </footer>
      ) : (
        <footer className="mt-20">
          <Newsletter />
          <div className="bg-background-light pt-7 lg:pt-14 pb-7">
            <Container>
              <div className="flex justify-around flex-wrap flex-col lg:flex-row gap-7 lg:gap-24">
                <Section title="Fale conosco">
                  <ul className="space-y-3 ml-5 lg:ml-0">
                    <Option label="Atendimento" url="#" />
                    <Option label="Acompanhe seu pedido" url="#" />
                    <Option label="Abra um chamado" url="#" />
                    <Option label="Envie um e-mail" url="#" />
                  </ul>
                </Section>
                <Section title="Institucional">
                  <ul className="space-y-3 ml-5 lg:ml-0">
                    <Option label="Trabalhe conosco" url="#" />
                    <Option label="Eventos" url="#" />
                    <Option label="Serviços" url="#" />
                    <Option label="Conteúdos e dicas" url="#" />
                    <Option label="Lojas físicas" url="#" />
                  </ul>
                </Section>
                <Section title="Suporte">
                  <ul className="space-y-3 ml-5 lg:ml-0">
                    <Option label="Políticas de privacidade" url="#" />
                    <Option label="Políticas de entrega" url="#" />
                    <Option label="Políticas de troca e devolução" url="#" />
                    <Option label="Políticas de pagamento" url="#" />
                    <Option label="Termos e condições" url="#" />
                  </ul>
                </Section>
                <div className="flex flex-col gap-7">
                  <Section title="Pagamento">
                    <ul className="flex items-center gap-5 flex-wrap lg:mb-12 ml-5 lg:ml-0">
                      <PaymentIcon
                        icon="logos:mastercard"
                        width={36}
                        height={28}
                      />
                      <PaymentIcon icon="logos:visa" width={48} height={16} />
                      <PaymentIcon icon="logos:elo" width={48} height={20} />
                      <PaymentIcon
                        icon="logos:hipercard"
                        width={56}
                        height={24}
                      />
                      <PaymentIcon
                        icon="ph:barcode-fill"
                        width={32}
                        height={32}
                      />
                      <PaymentIcon
                        icon="ic:outline-pix"
                        width={32}
                        height={32}
                        color="#7AB7A9"
                      />
                    </ul>
                  </Section>
                  <Section title="Redes sociais">
                    <ul className="flex items-center gap-5 flex-wrap ml-5 lg:ml-0">
                      <Social icon="mdi:instagram" url="#" />
                      <Social icon="ic:baseline-tiktok" url="#" />
                      <Social icon="mdi:linkedin" url="#" />
                      <Social icon="mdi:youtube" url="#" />
                    </ul>
                  </Section>
                </div>
              </div>
              <div className="bg-background-softLight h-[2px] w-full mb-7 mt-7 lg:mt-14"></div>
              <div className="flex flex-col items-center gap-3 lg:gap-2">
                <small className="text-xs text-text-light text-center">
                  © 2023 Casa Moura. Todos os direitos reservados - CNPJ
                  25.001.500/0001-00
                </small>
                <small className="text-xs text-text-light text-center">
                  Preços e condições para o site casamoura.com.br, podem sofrer
                  alterações sem prévia notificação.
                </small>
                <small className="text-xs text-text-light text-center">
                  Desenvolvido por hxmoura
                </small>
              </div>
            </Container>
          </div>
        </footer>
      )}
    </>
  );
}
