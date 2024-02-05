'use client';

import Container from '@/components/Container';
import Logo from '@/components/Logo';
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <header className="h-[120px] lg:h-[150px] bg-brand-primary">
      <Container>
        <div className="flex flex-col justify-center h-full gap-8 py-4">
          <section className="flex justify-between items-start lg:items-center h-full lg:h-auto relative">
            <div className="flex gap-4">
              <button className="text-white lg:hidden">
                <Icon icon="heroicons-outline:menu" className="w-7 h-7" />
              </button>
              <Logo link />
            </div>
            <form className="w-full lg:mx-24 flex absolute lg:static bottom-0 h-10 lg:h-11">
              <input
                type="text"
                className="w-full h-full outline-none rounded-l px-5 py-3 text-sm"
                placeholder="Pesquise pelo produto"
              />
              <button className="bg-white rounded-r px-2">
                <Icon
                  icon="heroicons:magnifying-glass-16-solid"
                  className="w-7 h-7"
                />
              </button>
            </form>
            <div className="flex gap-3 lg:gap-5">
              <button className="lg:w-10 lg:h-10" title="Conta">
                <a href="#" className="text-white">
                  <Icon
                    className="w-7 h-7 lg:w-9 lg:h-9 lg:hover:w-10 lg:hover:h-10 transition-all"
                    icon="uil:user"
                  />
                </a>
              </button>
              <button
                className="text-white lg:w-10 lg:h-10 relative"
                title="Carrinho"
              >
                <Icon
                  className="w-7 h-7 lg:w-9 lg:h-9 lg:hover:w-10 lg:hover:h-10 transition-all"
                  icon="uil:shopping-cart"
                />
              </button>
            </div>
          </section>
          <section className="hidden lg:flex">
            <nav>
              <ul className="flex items-center gap-10">
                <li className="flex items-center gap-3 text-white text-sm cursor-pointer">
                  <Icon icon="heroicons-outline:menu" className="w-5 h-5" />
                  Departamentos
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Promoções do dia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Cupons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Dicas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Suporte
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </Container>
    </header>
  );
}
