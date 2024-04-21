"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { product } from "@/app/(home)/types/product";
import { useContext } from "react";
import { CartContext } from "@/app/contexts/CartContext";

interface HighlightsProps {
  products: product[];
}

export default function Highlights({ products }: HighlightsProps) {
  const featuredProducts = products.filter(
    (product) => product.sectionHomePage === "highlight",
  );

  const { addProductToCart } = useContext(CartContext)!;

  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Destaques</SectionTitle>
          <ScrollContainer type="animated">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                label={product.name}
                price={product.price}
                promotionalPrice={product.promotionalPrice}
                img={product.image}
                reviews={product.reviews}
                onBuy={() => addProductToCart(product)}
              />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
