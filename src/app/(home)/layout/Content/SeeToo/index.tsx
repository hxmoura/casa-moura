"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { useContext } from "react";
import { CartContext } from "@/app/contexts/CartContext";
import { product } from "@/app/(home)/types/product";

interface SeeTooProps {
  products: product[];
}

export default function SeeToo({ products }: SeeTooProps) {
  const seeTooProducts = products.filter(
    (product) => product.sectionHomePage === "SeeToo",
  );

  const { addProductToCart } = useContext(CartContext)!;

  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Veja também</SectionTitle>
          <ScrollContainer type="animated">
            {seeTooProducts.map((product, index) => (
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
