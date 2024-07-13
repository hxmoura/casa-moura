"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "@/components/Container";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
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

interface ProductProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductProps) {
  const { addProductToCart } = useContext(CartContext)!;
  const [quantity, setQuantity] = useState<number>(1);
  const [isModalPaymentsVisible, setIsModalPaymentsVisible] =
    useState<boolean>(false);

  return (
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
            <Reviews reviews={product.reviews} starSize={20} counterSize={14} />
            <div className="my-6">
              {product.promotionalPrice && (
                <p className="font-medium line-through text-text-light mb-1">
                  {currencyConverter(product.price)}
                </p>
              )}
              <div className="mb-1 flex items-center">
                <strong className="font-semibold text-2xl text-brand-secondary">
                  {currencyConverter(product.promotionalPrice || product.price)}
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
              <button
                className="bg-brand-secondary w-full h-11 rounded-lg flex items-center justify-center gap-3 text-white hover:bg-brand-secondaryDark transition-colors"
                onClick={() => addProductToCart(product, quantity)}
              >
                <Icon icon="lucide:shopping-cart" className="w-5 h-5" />
                <span className="font-medium">Comprar</span>
              </button>
            </div>
            <div className="border border-background-softLight rounded-lg p-7 w-full lg:w-[424px]">
              <p className="text-sm">Calcule o frete:</p>
              <div className="flex flex-col md:flex-row gap-6 mt-3 mb-2">
                <div className="w-full">
                  <input
                    type="text"
                    className="h-10 w-full focus:bg-background-light border border-background-softLight rounded-lg outline-none text-sm px-3"
                  />
                  <a href="#" className="text-xs flex gap-1 w-fit mt-2">
                    Não sei meu CEP
                    <Icon
                      icon="eva:external-link-outline"
                      className="w-3 h-3"
                    />
                  </a>
                </div>
                <button className="border border-brand-secondary rounded-lg px-7 h-10 text-brand-secondary text-sm hover:text-white hover:bg-brand-secondary transition-colors">
                  Calcular
                </button>
              </div>
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
  );
}
