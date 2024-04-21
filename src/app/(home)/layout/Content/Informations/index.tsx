"use client";

import Container from "@/components/Container";
import Card from "./Card";

export default function Informations() {
  return (
    <section>
      <Container>
        <ul className="flex lg:justify-center gap-24 overflow-x-scroll disableScroll">
          <Card
            icon="heroicons:truck"
            title="Frete"
            description="Entregamos em todo Brasil"
          />
          <Card
            icon="ph:barcode-light"
            title="5% de desconto"
            description="Via boleto ou pix"
          />
          <Card
            icon="heroicons:credit-card"
            title="Até 12x"
            description="Pagamento facilitado"
          />
          <Card
            icon="heroicons:shield-check"
            title="Compra segura"
            description="Site criptografado"
          />
        </ul>
      </Container>
    </section>
  );
}
