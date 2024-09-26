import React, { useContext, useEffect } from "react";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { CartContext } from "@/contexts/CartContext";
import Modal from "../Modal";
import ModalHeader from "../Modal/ModalHeader";
import Button from "../Button";
import EmptyCart from "./EmptyCart";
import Product from "./Product";

export default function Cart() {
  const {
    cart,
    calculateCartTotal,
    handleCartOpening,
    openCart,
    setOpenCart,

    fetchProductsFromLocalStorage,
  } = useContext(CartContext)!;

  useEffect(() => {
    fetchProductsFromLocalStorage();
  }, [fetchProductsFromLocalStorage]);

  const emptyCart = cart.length === 0;

  return (
    <Modal
      openModal={openCart}
      setOpenModal={setOpenCart}
      position="right"
      className="max-w-[500px] w-11/12 h-full flex flex-col"
    >
      <ModalHeader label="Meu carrinho" onClose={handleCartOpening} />
      <main className="flex-grow p-5 space-y-3 overflow-y-scroll">
        {emptyCart ? (
          <EmptyCart />
        ) : (
          <>
            {cart.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </>
        )}
      </main>
      {!emptyCart && (
        <footer className="bg-white w-full px-5 py-7 space-y-7">
          <div>
            <p className="font-medium">Subtotal</p>
            <strong className="text-brand-secondary font-semibold text-lg md:text-xl mt-1">
              {currencyConverter(calculateCartTotal())}
            </strong>
          </div>
          <Button href="/cart" onClick={handleCartOpening}>
            Ir para o carrinho
          </Button>
        </footer>
      )}
    </Modal>
  );
}
