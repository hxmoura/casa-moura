"use client";

import Container from "@/components/Container";
import { Icon } from "@iconify/react";

export default function Newsletter() {
  return (
    <section className="w-full min-h-[110px] bg-background-softDark">
      <Container>
        <div className="flex flex-wrap justify-around items-center py-7 gap-7">
          <div className="text-center lg:text-start">
            <strong className="text-2xl text-white font-semibold">
              Cadastra-se em nossa newsletter!
            </strong>
            <p className="text-white mt-3 md:mt-2">
              Fique por dentro das promoções e novidades
            </p>
          </div>
          <form className="flex flex-col md:flex-row max-w-[460px] w-full gap-3">
            <div className="relative flex-1">
              <Icon
                icon="heroicons:envelope"
                className="w-6 h-6 absolute top-1/2 left-3 -translate-y-1/2"
              />
              <input
                type="email"
                className="rounded-lg h-11 w-full text-xs pl-11 pr-2 outline-none"
                placeholder="Seu melhor e-mail"
              />
            </div>
            <button className="flex justify-center items-center gap-3 bg-white text-background-softDark rounded-lg h-11 w-full md:w-[150px]">
              <span className="text-sm font-medium">Cadastrar</span>
              <Icon icon="heroicons:paper-airplane-solid" className="w-4 h-4" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
