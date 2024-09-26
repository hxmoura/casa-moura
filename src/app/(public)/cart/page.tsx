"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Recommendations from "../product/[id]/layout/Recommendations";
import EmptyCart from "@/components/Cart/EmptyCart";
import Footer from "@/components/Footer";
import Product from "@/components/Cart/Product";
import { useContext, useEffect } from "react";
import { CartContext } from "@/contexts/CartContext";
import CheckoutContainer from "@/components/CheckoutContainer";
import { currencyConverter } from "@/utils/CurrencyConverter";
import Header from "@/components/Header";
import CalculateDelivery from "@/components/CalculateDelivery";

export default function Cart() {
  const { cart, fetchProductsFromLocalStorage, calculateCartTotal } =
    useContext(CartContext)!;

  useEffect(() => {
    fetchProductsFromLocalStorage();
  }, [fetchProductsFromLocalStorage]);

  return (
    <div
      className={`flex flex-col ${cart.length > 0 ? "bg-background-light lg:bg-transparent" : "bg-transparent"}`}
    >
      <Header />

      {cart.length > 0 ? (
        <main className="mb-3 lg:my-12">
          <Container noPadding>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
              <CheckoutContainer className="w-full space-y-5">
                {cart.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </CheckoutContainer>

              <div className="w-full lg:max-w-[424px] flex flex-col-reverse lg:flex-col gap-3 lg:gap-6 sticky top-5 h-min">
                <CheckoutContainer>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <p className="text-text-light text-sm">
                        Subtotal ({cart.length}{" "}
                        {cart.length > 0 ? "Itens" : "Item"})
                      </p>
                      <p className="text-text-light text-sm">
                        {currencyConverter(calculateCartTotal())}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <p className="text-text-light text-sm">Frete</p>
                      <p className="text-text-light text-sm">--</p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mb-7 mt-5">
                    <p className="font-medium text-lg">Total</p>
                    <div>
                      <p className="text-right font-medium text-lg">
                        {currencyConverter(calculateCartTotal())}
                      </p>
                      <small className="text-text-light text-sm">
                        até 12x de{" "}
                        {currencyConverter(calculateCartTotal() / 12)}
                      </small>
                    </div>
                  </div>
                  <Button href="/checkout">Finalizar pedido</Button>
                </CheckoutContainer>

                <CheckoutContainer>
                  <CalculateDelivery />
                </CheckoutContainer>
              </div>
            </div>
          </Container>
        </main>
      ) : (
        <main className="my-24">
          <EmptyCart />
          <Recommendations />
        </main>
      )}

      <Footer type="short" />
    </div>
  );
}
