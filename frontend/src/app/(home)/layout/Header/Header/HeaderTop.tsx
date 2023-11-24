import Link from 'next/link';
import { Icon } from '@iconify/react';

import Logo from '@/components/Logo';
import Container from '@/components/Container';

import { useContext } from 'react';
import { MenuContext } from '@/app/(home)/contexts/MenuProvider';
import { CartContext } from '@/app/(home)/contexts/CartProvider';

export default function Top() {
  const { handleMenuToggle } = useContext(MenuContext)!;
  const { handleToggleCart } = useContext(CartContext)!;

  return (
    <section className="bg-brand-primaryDark lg:bg-brand-primary h-[150px] lg:h-[90px] py-4">
      <Container>
        <div className="flex justify-between items-start lg:items-center relative h-full">
          <button className="lg:hidden" onClick={handleMenuToggle}>
            <Icon
              className="w-[30px] h-[30px] md:w-10 md:h-10 text-white"
              icon="heroicons-outline:menu"
            />
          </button>

          <div className="absolute lg:static left-12 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0">
            <Logo link />
          </div>

          <form className="w-full h-12 flex absolute bottom-0 lg:static lg:mx-16">
            <input
              className="bg-white p-4 rounded-l-md outline-none text-xs border-none w-full"
              type="text"
              placeholder="Pesquise seu produto"
            />
            <button
              type="submit"
              className="bg-brand-secondary rounded-r-md w-12 flex items-center justify-center"
            >
              <Icon
                className="text-white w-7 h-7"
                icon="heroicons:magnifying-glass"
              />
            </button>
          </form>

          <div className="flex gap-5">
            <button
              className="flex items-center gap-[5px] relative"
              onClick={handleToggleCart}
            >
              <div className="bg-brand-secondary rounded-full w-5 h-5 text-xs text-white flex justify-center items-center absolute -top-1 left-5">
                3
              </div>
              <Icon
                className="w-[30px] h-[30px] md:w-10 md:h-10 lg:w-9 lg:h-9 text-white"
                icon="heroicons-outline:shopping-cart"
              />
              <span className="text-white font-medium hidden lg:flex">
                Carrinho
              </span>
            </button>
            <button>
              <Link className="flex items-center gap-[5px]" href="/signin">
                <Icon
                  className="w-[30px] h-[30px] md:w-10 md:h-10 lg:w-9 lg:h-9 text-white"
                  icon="heroicons:user"
                />
                <span className="text-white font-medium hidden lg:flex">
                  Conta
                </span>
              </Link>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
