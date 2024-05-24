"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "./Card";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { Brand } from "@/types/brand";

interface BrandsProps {
  brands: Brand[];
}

export default function Brands({ brands }: BrandsProps) {
  return (
    <section className="mt-20">
      <Container>
        <div className="relative">
          <SectionTitle>Navegue por marcas</SectionTitle>
          <ScrollContainer type="fixed">
            {brands.map((brand, index) => (
              <Card
                key={index}
                link={brand.name?.replace(/\s/g, "").toLowerCase()}
                logo={brand.logo}
                name={brand.name}
              />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
