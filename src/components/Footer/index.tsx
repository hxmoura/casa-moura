"use client";

import Container from "@/components/Container";
import Section from "./components/Section";
import Link from "./components/Link";
import Social from "./components/Social";
import PaymentIcon from "./components/PaymentIcon";
import Newsletter from "./components/Newsletter";

export default function Footer() {
  return (
    <footer>
      <Newsletter />
      <div className="bg-background-light pt-7 lg:pt-14 pb-7">
        <Container>
          <div className="flex justify-around flex-wrap flex-col lg:flex-row gap-7 lg:gap-24">
            <Section title="Fale conosco">
              <ul className="space-y-3 ml-5 lg:ml-0">
                <Link label="Atendimento" url="#" />
                <Link label="Acompanhe seu pedido" url="#" />
                <Link label="Abra um chamado" url="#" />
                <Link label="Envie um e-mail" url="#" />
              </ul>
            </Section>
            <Section title="Institucional">
              <ul className="space-y-3 ml-5 lg:ml-0">
                <Link label="Trabalhe conosco" url="#" />
                <Link label="Eventos" url="#" />
                <Link label="Serviços" url="#" />
                <Link label="Conteúdos e dicas" url="#" />
                <Link label="Lojas físicas" url="#" />
              </ul>
            </Section>
            <Section title="Suporte">
              <ul className="space-y-3 ml-5 lg:ml-0">
                <Link label="Políticas de privacidade" url="#" />
                <Link label="Políticas de entrega" url="#" />
                <Link label="Políticas de troca e devolução" url="#" />
                <Link label="Políticas de pagamento" url="#" />
                <Link label="Termos e condições" url="#" />
              </ul>
            </Section>
            <div className="flex flex-col gap-7">
              <Section title="Pagamento">
                <ul className="flex items-center gap-5 flex-wrap lg:mb-12 ml-5 lg:ml-0">
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
  );
}
