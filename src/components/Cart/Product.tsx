import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react";
import ProductCounter from "./ProductCounter";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { Product as ProductType } from "@/types/product";
import Link from "next/link";

interface ProductInCart extends ProductType {
  quantityInCart: number;
}

interface ProductProps {
  product: ProductInCart;
}

export default function Product({ product }: ProductProps) {
  const {
    deleteProductToCart,
    addProductQuantity,
    subtractProductQuantity,
    handleCloseCart,
  } = useContext(CartContext)!;

  return (
    <article className="w-full flex justify-between items-start gap-3 border-b border-background-softLight last:border-none pb-5 last:pb-0">
      <div className="flex">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-16 h-16 mr-3"
          draggable={false}
        />
        <div className="space-y-2">
          <Link
            href={`/product/${product.id}`}
            onClick={handleCloseCart}
            className="hover:text-brand-primary hover:underline text-xs"
          >
            {product.name}
          </Link>

          <div className="flex items-center gap-2">
            <strong className="font-semibold text-brand-secondary text-sm">
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
        </div>
      </div>

      <button
        className="rounded bg-background-softLight p-[6px] text-text-light hover:bg-brand-secondary hover:text-white transition-colors"
        onClick={() => deleteProductToCart(product)}
      >
        <Icon icon="heroicons:trash-16-solid" className="w-4 h-4" />
      </button>
    </article>
  );
}
