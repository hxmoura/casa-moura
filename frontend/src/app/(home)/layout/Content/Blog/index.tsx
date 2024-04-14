"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "./Card";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import { blog } from "@/app/(home)/types/blog";

interface BlogProps {
  blog: blog[];
}

export default function Blog({ blog }: BlogProps) {
  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <SectionTitle>Fique por dentro</SectionTitle>
          <ScrollContainer type="animated">
            {blog.map((post, index) => (
              <Card key={index} img={post.image} title={post.title} link="#" />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}
