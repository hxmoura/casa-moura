import Card from './Card';

import Scroll from '@/components/Scroll';
import useScroll from '@/components/Scroll/useScroll';

export default function Informations() {
  const { getScrollReference } = useScroll();

  return (
    <section className="flex justify-center mt-20">
      <Scroll setScrollRef={getScrollReference} className="gap-[100px]">
        <Card
          icon="heroicons:truck"
          title="Frete grátis"
          subtitle="Para todo Brasil"
        />
        <Card
          icon="ph:barcode-light"
          title="5% de desconto"
          subtitle="Via boleto ou pix"
        />
        <Card
          icon="heroicons:credit-card"
          title="Até 12x"
          subtitle="Pagamento facilitado"
        />
        <Card
          icon="heroicons:shield-check"
          title="Compra segura"
          subtitle="Site criptografado"
        />
      </Scroll>
    </section>
  );
}
