"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icon } from "@iconify/react";

export default function notFound() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <section className="flex flex-col items-center justify-center py-28">
            <Icon
              icon="tdesign:search-error"
              className="text-background-softLight w-32 h-32 lg:w-40 lg:h-40 mb-7"
            />
            <h3 className="font-semibold text-xl lg:text-2xl text-center">
              Ops! A página não foi encontrada!
            </h3>
            <p className="mt-5 mb-10 font-medium text-text-light max-w-96 text-center">
              Você digitou o endereço errado, ou a página não está mais
              disponível.
            </p>
            <div className="max-w-[424px] w-full">
              <Button href="/">Ir para a página inicial</Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
