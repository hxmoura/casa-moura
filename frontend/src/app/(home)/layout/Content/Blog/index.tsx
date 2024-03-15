"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "./Card";
import ScrollContainer from "@/components/Scroll/ScrollContainer";

export default function Blog() {
  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Fique por dentro</SectionTitle>
          <ScrollContainer type="animated">
            <Card
              img="https://images.unsplash.com/photo-1576678433413-202829a1ab98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
            <Card
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
            <Card
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
            <Card
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
            <Card
              img="https://images.unsplash.com/photo-1576678433413-202829a1ab98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
            <Card
              img="https://images.unsplash.com/photo-1576678433413-202829a1ab98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
            <Card
              img="https://images.unsplash.com/photo-1576678433413-202829a1ab98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Tipos de chuveiros: Saiba escolher o ideal para você"
              link="#"
            />
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
