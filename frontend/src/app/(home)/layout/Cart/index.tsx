'use client';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import useAnimatedEnd from '@/hooks/useAnimatedEnd';

export default function Cart() {
  const { cartIsOpen, handleToggleCart } = useContext(CartContext)!;
  const { shouldRender, animatedElementRef } = useAnimatedEnd(cartIsOpen);

  return (
    <>
      {shouldRender && (
        <section ref={animatedElementRef} className="fixed top-0 z-10">
          <div
            className={`lg:w-[500px] h-full bg-white fixed right-0 flex flex-col z-20 animate-entryRightSide
            ${!cartIsOpen && 'animate-exitRightSide'}
          `}
          >
            <Header />

            <main className="p-5 gap-7 flex flex-col grow overflow-y-auto">
              <Product
                souldOut
                label="Chuveiro Lorenzetti Advanced 7500 Watts"
                image="https://m.media-amazon.com/images/I/31R5grXUtZL._AC_UF894,1000_QL80_.jpg"
                price={27.71}
              />
              <Product
                label="Chuveiro Lorenzetti Advanced 7500 Watts"
                image="https://m.media-amazon.com/images/I/31R5grXUtZL._AC_UF894,1000_QL80_.jpg"
                price={27.71}
              />
              <Product
                label="Chuveiro Lorenzetti Advanced 7500 Watts"
                image="https://m.media-amazon.com/images/I/31R5grXUtZL._AC_UF894,1000_QL80_.jpg"
                price={27.71}
              />
            </main>
            <Footer />
          </div>
          <div
            onClick={handleToggleCart}
            className={`h-screen w-screen bg-black animate-fadeIn ${
              !cartIsOpen && 'animate-fadeOut'
            }`}
          ></div>
        </section>
      )}
    </>
  );
}
