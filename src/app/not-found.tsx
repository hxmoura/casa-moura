"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeaderMaster from "@/components/HeaderMaster";
import { Icon } from "@iconify/react";

export default function notFound() {
  return (
    <>
      <HeaderMaster />
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
            <a
              href="/"
              className="text-white text-sm font-medium bg-brand-secondary rounded-md h-11 w-full max-w-[424px] hover:bg-brand-secondaryDark flex items-center justify-center"
            >
              Ir para a página inicial
            </a>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
