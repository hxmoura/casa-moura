import { Icon } from "@iconify/react";
import useAnimatedUnmount from "@/hooks/useAnimatedEnd";
import Product from "./Product";
import React, { useContext, useEffect, MouseEvent } from "react";
import { CartContext } from "@/app/contexts/CartContext";
import { currencyConverter } from "@/utils/CurrencyConverter";

export default function Cart() {
  const {
    cart,
    deleteProductToCart,
    calculateCartTotal,
    addProductQuantity,
    subtractProductQuantity,
    handleCartOpening,
    openCart,
    fetchProductsFromLocalStorage,
  } = useContext(CartContext)!;
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(openCart);

  useEffect(() => {
    fetchProductsFromLocalStorage();
  }, [fetchProductsFromLocalStorage]);

  function backgroundHandleCart(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      handleCartOpening();
    }
  }

  const emptyCart = cart?.length === 0;

  return (
    <>
      {shouldRender && (
        <section
          className="bg-opacity-30 bg-black fixed top-0 bottom-0 right-0 left-0 z-50"
          onClick={backgroundHandleCart}
        >
          <div
            ref={animatedElementRef}
            className={`max-w-[500px] w-11/12 h-full bg-white absolute right-0 flex flex-col animate-entryRightSide-300 ${!openCart && "animate-exitRightSide-300"}`}
          >
            <header className="h-[60px] bg-brand-primary p-5 flex justify-between">
              <strong className="text-white font-medium">Meu carrinho</strong>
              <button onClick={handleCartOpening}>
                <Icon icon="heroicons:x-mark" className="w-6 h-6 text-white" />
              </button>
            </header>
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
                  {cart.map((product, index) => (
                    <Product
                      key={index}
                      label={product.name}
                      price={product.price}
                      promotionalPrice={product.promotionalPrice}
                      quantity={product.quantityInCart}
                      img={product.image}
                      onRemove={() => deleteProductToCart(product)}
                      onAdd={() => addProductQuantity(product)}
                      onSubtract={() => subtractProductQuantity(product)}
                      soldOff={product.quantityInStock > 0 ? false : true}
                    />
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
          </div>
        </section>
      )}
    </>
  );
}
