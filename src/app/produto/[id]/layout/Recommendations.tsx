"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { getProducts } from "@/api/products";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export default function Recommendations() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      const products = await getProducts();
      setProducts(products);
    }

    getData();
  }, []);

  const recommendationsProducts = products
    .sort(() => {
      return 0.5 - Math.random();
    })
    .slice(0, 10);

  return (
    <section className="my-28">
      <Container>
        <div className="relative">
          <SectionTitle>Talvez você goste</SectionTitle>
          <ScrollContainer type="animated">
            {recommendationsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
