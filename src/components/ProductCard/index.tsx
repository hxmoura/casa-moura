import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react";
import ImageFallback from "../ImageFallback";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import Reviews from "../Reviews";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addProductToCart } = useContext(CartContext)!;

  function btnBuy(event: React.MouseEvent) {
    event.preventDefault();
    addProductToCart(product);
  }

  return (
    <article className="w-[220px] h-[400px] border border-background-softLight lg:hover:border-brand-secondary rounded-lg group flex-shrink-0 transition-colors lg:hover:shadow-xl overflow-hidden">
      <Link href={`/produto/${product.id}`}>
        <div className="relative">
          {product.promotionalPrice && (
            <span className="bg-brand-secondary text-white absolute top-3 left-3 rounded-lg px-2 py-1 text-sm font-medium">
              -
              {Math.round(
                ((product.price - product.promotionalPrice) / product.price) *
                  100,
              )}
              %
            </span>
          )}
          <ImageFallback
            image={product.images?.[0]}
            className="w-full h-[218px] object-contain"
            classNameFallback="w-full h-[218px]"
          />
          <button
            className="bg-brand-secondary text-white items-center justify-center absolute bottom-0 gap-2 h-9 hover:bg-brand-secondaryDark flex opacity-0 lg:group-hover:opacity-100 transition-opacity w-full"
            onClick={(event) => btnBuy(event)}
          >
            <Icon icon="lucide:shopping-cart" className="w-6 h-6" />
            <span className="text-sm font-medium">Comprar</span>
          </button>
        </div>
        <div className="p-3 mt-3 ">
          <p className="text-sm lineLimit mb-2">{product.name}</p>
          <Reviews reviews={product.reviews} />
          <div className="flex flex-col mt-2">
            {product.promotionalPrice && (
              <small className="text-text-light text-sm line-through">
                {currencyConverter(product.price)}
              </small>
            )}
            <strong className="text-lg font-semibold">
              {product.promotionalPrice
                ? currencyConverter(product.promotionalPrice)
                : currencyConverter(product.price)}
            </strong>
            <small className="text-text-light text-xs mt-1">
              12x de{" "}
              {product.promotionalPrice
                ? currencyConverter(product.promotionalPrice / 12)
                : currencyConverter(product.price / 12)}{" "}
              sem juros
            </small>
          </div>
        </div>
      </Link>
    </article>
  );
}
