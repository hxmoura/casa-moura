import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react";
import ProductCounter from "./ProductCounter";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { Product as ProductType } from "@/types/product";

interface ProductInCart extends ProductType {
  quantityInCart: number;
}

interface ProductProps {
  product: ProductInCart;
}

export default function Product({ product }: ProductProps) {
  const { deleteProductToCart, addProductQuantity, subtractProductQuantity } =
    useContext(CartContext)!;

  return (
    <div className="border border-background-softLight rounded-lg p-3 min-h-[100px] w-full flex items-start overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-[76px] h-[76px]"
      />
      <div className="flex flex-col gap-2 flex-grow ml-3 mr-6">
        <p className="text-xs font-medium">{product.name}</p>

        {product.quantityInStock < 1 ? (
          <p className="text-brand-secondary text-xs px-2 py-1 bg-[#FFDFDF] rounded-md w-fit">
            Produto sem estoque
          </p>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <strong className="font-semibold text-sm text-brand-secondary">
                {currencyConverter(product.promotionalPrice || product.price)}
              </strong>
              {product.promotionalPrice && (
                <small className="text-xs text-text-light line-through">
                  {currencyConverter(product.price)}
                </small>
              )}
            </div>
            <ProductCounter
              onPlus={() => addProductQuantity(product)}
              onMinus={() => subtractProductQuantity(product)}
              inputValue={product.quantityInCart}
              small
            />
          </>
        )}
      </div>
      <button
        className="rounded-lg bg-background-softLight p-[6px] text-text-light hover:bg-brand-secondary hover:text-white transition-colors"
        onClick={() => deleteProductToCart(product)}
      >
        <Icon icon="heroicons:trash-16-solid" className="w-4 h-4" />
      </button>
    </div>
  );
}
