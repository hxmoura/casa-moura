"use client";

import CalculateDelivery from "@/components/CalculateDelivery";
import EmptyCart from "@/components/Cart/EmptyCart";
import Product from "@/components/Cart/Product";
import CheckoutContainer from "@/components/CheckoutContainer";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductSummary from "@/components/ProductSummary";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";
import Recommendations from "../product/[id]/layout/Recommendations";
import Loading from "./loading";

export default function Cart() {
  const { cart, fetchProductsFromLocalStorage, isLoading } = useCart();

  useEffect(() => {
    fetchProductsFromLocalStorage();
  }, [fetchProductsFromLocalStorage]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`flex flex-col ${cart.length > 0 ? "bg-background-light lg:bg-transparent" : "bg-transparent"} min-h-screen`}
    >
      <Header />

      {cart.length > 0 ? (
        <main className="mb-3 lg:my-12 flex-1">
          <Container noPadding>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
              <CheckoutContainer className="w-full space-y-5">
                {cart.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </CheckoutContainer>

              <div className="w-full lg:max-w-[424px] flex flex-col-reverse lg:flex-col gap-3 lg:gap-6 sticky top-5 h-min">
                <CheckoutContainer>
                  <ProductSummary href="/checkout" />
                </CheckoutContainer>

                <CheckoutContainer>
                  <CalculateDelivery />
                </CheckoutContainer>
              </div>
            </div>
          </Container>
        </main>
      ) : (
        <main className="my-24 flex-1">
          <EmptyCart />
          <Recommendations />
        </main>
      )}

      <Footer type="short" />
    </div>
  );
}
