"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { getProducts } from "@/api/products";
import { Product } from "@/types/product";
import useFetcher from "@/hooks/useFetcher";

export default function Recommendations() {
  const { data: products } = useFetcher<Product[]>(getProducts) || [];

  const recommendationsProducts = products
    ?.sort(() => {
      return 0.5 - Math.random();
    })
    .slice(0, 10);

  return (
    <>
      {products && products.length > 0 && (
        <section className="mt-28">
          <Container>
            <div className="relative">
              <SectionTitle>Talvez você goste</SectionTitle>
              <ScrollContainer type="animated">
                {recommendationsProducts?.map((product) => (
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
