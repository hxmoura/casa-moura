"use client";

import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { useContext } from "react";
import { CartContext } from "@/app/contexts/CartContext";
import { product } from "@/app/(home)/types/product";

interface PromotionsProps {
  products: product[];
}

export default function Promotions({ products }: PromotionsProps) {
  const discountedProducts = products.filter(
    (product) => product.sectionHomePage === "promotion",
  );

  const { addProductToCart } = useContext(CartContext)!;

  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Promoções do dia</SectionTitle>
          <ScrollContainer type="animated">
            {discountedProducts.map((product, index) => (
              <ProductCard
                key={index}
                label={product.name}
                price={product.price}
                promotionalPrice={product.promotionalPrice}
                img={product.image}
                reviews={product.reviews}
                promotion
                onBuy={() => addProductToCart(product)}
              />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
