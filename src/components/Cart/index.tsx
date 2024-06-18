import { Icon } from "@iconify/react";
import Product from "./Product";
import React, { useContext, useEffect } from "react";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { CartContext } from "@/contexts/CartContext";
import Modal from "../Modal";
import ModalHeader from "../Modal/ModalHeader";

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
          <div className="flex flex-col justify-center items-center h-full">
            <Icon
              icon="heroicons-outline:shopping-cart"
              className="w-20 h-20 text-brand-secondary"
            />
            <strong className="font-semibold text-center mt-5 mb-3">
              Seu carrinho está vazio!
            </strong>
            <p className="text-text-light text-center max-w-72 text-sm">
              Adicione produtos para prosseguir para a próxima etapa.
            </p>
            <button
              className="bg-brand-secondary rounded-[4px] text-white font-medium text-sm w-[200px] h-10 hover:bg-brand-secondaryDark mt-5"
              onClick={handleCartOpening}
            >
              Ir as compras
            </button>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </>
        )}
      </main>
      {!emptyCart && (
        <footer className="bg-white min-h-[190px] w-full px-5 py-6 flex flex-col justify-between">
          <div>
            <p className="font-medium">Subtotal:</p>
            <strong className="text-brand-secondary font-semibold text-lg md:text-xl mt-1">
              {currencyConverter(calculateCartTotal())}
            </strong>
          </div>
          <div>
            <small className="text-xs text-text-light">
              *Frete e cupons poderão ser aplicados na etapa de pagamento
            </small>
            <button className="bg-brand-secondary hover:bg-brand-secondaryDark transition-colors flex items-center justify-center p-3 h-10 rounded-[4px] font-medium text-sm text-white w-full mt-2">
              Ir para o carrinho
            </button>
          </div>
        </footer>
      )}
    </Modal>
  );
}
