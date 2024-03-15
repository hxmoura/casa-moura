/* eslint-disable @next/next/no-img-element */
import { currencyConverter } from "@/utils/CurrencyConverter";
import { Icon } from "@iconify/react";

interface ProductProps {
  soldOff?: boolean;
  label: string;
  price: number;
  quantity: number;
  img: string;
}

export default function Product({
  soldOff,
  label,
  price,
  quantity,
  img,
}: ProductProps) {
  return (
    <div className="border border-background-softLight rounded-lg p-3 min-h-[100px] w-full flex items-start overflow-hidden">
      <img src={img} alt={label} className="w-[76px] h-[76px]" />
      <div className="flex flex-col gap-2 flex-grow ml-3 mr-6">
        <p className="text-xs font-medium">{label}</p>

        {soldOff ? (
          <p className="text-brand-secondary text-xs px-2 py-1 bg-[#FFDFDF] rounded-md w-fit">
            Produto sem estoque
          </p>
        ) : (
          <>
            <strong className="font-semibold text-sm text-brand-secondary">
              {currencyConverter(price)}
            </strong>

            <div className="border border-background-softLight rounded-lg flex w-min overflow-hidden">
              <button className="w-6 h-6 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors">
                <Icon icon="heroicons:minus" className="w-3 h-3" />
              </button>
              <input
                type="text"
                className="outline-none w-8 text-xs text-center"
                value={quantity}
              />
              <button className="w-6 h-6 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors">
                <Icon icon="heroicons:plus" className="w-3 h-3" />
              </button>
            </div>
          </>
        )}
      </div>
      <button className="rounded-lg bg-background-softLight p-[6px] text-text-light hover:bg-brand-secondary hover:text-white transition-colors">
        <Icon icon="heroicons:trash-16-solid" className="w-4 h-4" />
      </button>
    </div>
  );
}
