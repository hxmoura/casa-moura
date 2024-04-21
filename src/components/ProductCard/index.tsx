import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react";
import ImageFallback from "../ImageFallback";

interface ProductCardProps {
  promotion?: boolean;
  label: string;
  price: number;
  promotionalPrice: number;
  img: string;
  reviews: Array<{
    perfilName: string;
    raiting: number;
    description: string;
  }>;
  onBuy: () => void;
}

export default function ProductCard({
  promotion,
  label,
  price,
  promotionalPrice = 0,
  img,
  reviews,
  onBuy,
}: ProductCardProps) {
  if (!label || !price) {
    return null;
  }

  const ratingSum = reviews
    ?.map((review) => review.raiting)
    .reduce((acc, value) => acc + value, 0);

  const ratingAverage = Math.round(ratingSum / reviews?.length);

  function btnBuy(event: React.MouseEvent) {
    event.preventDefault();
    onBuy();
  }

  return (
    <article className="w-[220px] h-[400px] border border-background-softLight lg:hover:border-brand-secondary rounded-lg group flex-shrink-0 transition-colors lg:hover:shadow-xl overflow-hidden">
      <a href="#">
        <div className="relative">
          {promotion && (
            <span className="bg-brand-secondary text-white absolute top-3 left-3 rounded-lg px-2 py-1 text-sm font-medium">
              -{Math.round(((price - promotionalPrice) / price) * 100)}%
            </span>
          )}
          <ImageFallback
            image={img}
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
          <p className="text-sm lineLimit">{label}</p>
          <div className="flex my-2">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Icon
                key={index}
                icon={`${ratingAverage >= star ? "heroicons:star-solid" : "heroicons:star"}`}
                className={`text-[#FFA800] w-4 h-4`}
              />
            ))}
            <span className="text-xs text-text-light ml-1">
              ({reviews?.length})
            </span>
          </div>
          <div className="flex flex-col">
            {promotion && (
              <small className="text-text-light text-sm line-through">
                {currencyConverter(price)}
              </small>
            )}
            <strong className="text-lg font-semibold">
              {promotion
                ? currencyConverter(promotionalPrice)
                : currencyConverter(price)}
            </strong>
            <small className="text-text-light text-xs mt-1">
              12x de{" "}
              {promotion
                ? currencyConverter(promotionalPrice / 12)
                : currencyConverter(price / 12)}{" "}
              sem juros
            </small>
          </div>
        </div>
      </a>
    </article>
  );
}
