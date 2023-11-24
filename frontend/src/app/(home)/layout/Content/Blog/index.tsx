import SectionTitle from '@/components/SectionTitle';
import Card from './Card';

import Scroll from '@/components/Scroll';
import useScroll from '@/components/Scroll/useScroll';

export default function Blog() {
  const { getScrollReference } = useScroll();

  return (
    <section className="mt-20">
      <SectionTitle>Fique por dentro</SectionTitle>
      <Scroll setScrollRef={getScrollReference}>
        <Card
          image="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          title="Tipos de chuveiros: Saiba escolher o ideal para você"
        />
        <Card
          image="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          title="Tipos de chuveiros: Saiba escolher o ideal para você"
        />
        <Card
          image="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          title="Tipos de chuveiros: Saiba escolher o ideal para você"
        />
        <Card
          image="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          title="Tipos de chuveiros: Saiba escolher o ideal para você"
        />
        <Card
          image="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          title="Tipos de chuveiros: Saiba escolher o ideal para você"
        />
      </Scroll>
    </section>
  );
}
