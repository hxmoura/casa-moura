import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';

import Scroll from '@/components/Scroll';
import useScroll from '@/components/Scroll/useScroll';

export default function SeeToo() {
  const { getScrollReference } = useScroll();

  return (
    <section className="mt-20">
      <SectionTitle>Veja também</SectionTitle>
      <Scroll setScrollRef={getScrollReference}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Scroll>
    </section>
  );
}
