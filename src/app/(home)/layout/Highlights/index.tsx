"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { Product } from "@/types/product";

interface HighlightsProps {
  products: Product[];
}

export default function Highlights({ products }: HighlightsProps) {
  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Destaques</SectionTitle>
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
