"use client";

import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { Product } from "@/types/product";

interface PromotionsProps {
  products: Product[];
}

export default function Promotions({ products }: PromotionsProps) {
  return (
    <>
      {products?.length > 0 && (
        <section className="my-20">
          <Container>
            <div className="relative">
              <SectionTitle>Promoções do dia</SectionTitle>
              <ScrollContainer type="animated">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ScrollContainer>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
