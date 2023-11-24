import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';

import Scroll from '@/components/Scroll';
import useScroll from '@/components/Scroll/useScroll';

export default function Promotions() {
  const { getScrollReference } = useScroll();

  return (
    <section className="mt-20">
      <SectionTitle>Promoções do dia</SectionTitle>
      <Scroll setScrollRef={getScrollReference}>
        <ProductCard promotion />
      </Scroll>
    </section>
  );
}
