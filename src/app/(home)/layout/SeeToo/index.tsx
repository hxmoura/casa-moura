"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { Product } from "@/types/product";

interface SeeTooProps {
  products: Product[];
}

export default function SeeToo({ products }: SeeTooProps) {
  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Veja também</SectionTitle>
          <ScrollContainer type="animated">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
