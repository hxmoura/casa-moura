"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "@/components/Container";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { currencyConverter } from "@/utils/CurrencyConverter";
import ProductCounter from "@/components/Cart/ProductCounter";
import MenuDesktop from "../components/MenuDesktop";
import { MenuOptions } from "../components/MenuOptions";
import { InformationsContent, ReviewsContent } from "../components/ContentMenu";
import PaymentsModal from "../components/PaymentsModal";
import ProductImages from "../components/ProductImages";
import Reviews from "@/components/Reviews";
import MenuDropdown from "@/components/MenuDropdown";
import Button from "@/components/Button";
import CalculateDelivery from "@/components/CalculateDelivery";

interface ProductProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductProps) {
  const { addProductToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [isModalPaymentsVisible, setIsModalPaymentsVisible] =
    useState<boolean>(false);

  return (
    <>
      {product && (
        <main className="my-10 lg:my-28">
          <PaymentsModal
            product={product}
            isModalPaymentsVisible={isModalPaymentsVisible}
            setIsModalPaymentsVisible={setIsModalPaymentsVisible}
          />

          <Container>
            <div className="flex flex-col lg:flex-row gap-6">
              <ProductImages product={product} />

              <section className="w-full lg:w-2/4">
                <h5 className="mb-2 font-semibold text-2xl">{product.name}</h5>
                <p className="text-sm mb-3">
                  <span className="font-medium">Referência: </span>
                  {product.id}
                </p>
                <Reviews
                  reviews={product.reviews}
                  starSize={20}
                  counterSize={14}
                />
                <div className="my-6">
                  {product.promotionalPrice && (
                    <p className="font-medium line-through text-text-light mb-1">
                      {currencyConverter(product.price)}
                    </p>
                  )}
                  <div className="mb-1 flex items-center">
                    <strong className="font-semibold text-2xl text-brand-secondary">
                      {currencyConverter(
                        product.promotionalPrice || product.price,
                      )}
                    </strong>
                    <small className="text-text-light ml-1 text-sm">/un</small>
                  </div>
                  <p className="text-sm">
                    12x de{" "}
                    {currencyConverter(
                      product.promotionalPrice / 12 || product.price / 12,
                    )}{" "}
                    sem juros
                  </p>
                  <button
                    className="font-medium text-sm text-text-light mt-4 hover:underline"
                    onClick={() => setIsModalPaymentsVisible(true)}
                  >
                    Formas de pagamento
                  </button>
                </div>
                <div className="flex mb-8 gap-6 flex-col lg:flex-row w-full lg:w-[424px]">
                  <ProductCounter
                    onPlus={() => setQuantity((prevState) => prevState + 1)}
                    onMinus={() => setQuantity((prevState) => prevState - 1)}
                    inputValue={quantity}
                  />
                  <Button
                    onClick={() => addProductToCart(product, quantity)}
                    height={44}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Icon icon="lucide:shopping-cart" className="w-5 h-5" />
                      <span className="font-medium">Comprar</span>
                    </div>
                  </Button>
                </div>

                <div className="lg:w-[424px] border rounded border-background-softLight p-7">
                  <CalculateDelivery />
                </div>
              </section>
            </div>

            <section className="mt-20 lg:mt-40">
              <MenuDesktop product={product} />

              <ul className="lg:hidden flex flex-col gap-6">
                <MenuDropdown label={MenuOptions.informations}>
                  {InformationsContent(product)}
                </MenuDropdown>
                <MenuDropdown label={MenuOptions.reviews}>
                  {ReviewsContent(product)}
                </MenuDropdown>
              </ul>
            </section>
          </Container>
        </main>
      )}
    </>
  );
}
