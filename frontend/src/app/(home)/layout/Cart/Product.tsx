import { Icon } from '@iconify/react';
import Image from 'next/image';

import { currencyConverter } from '@/utils/CurrencyConverter';

type CartProductProps = {
  label: string;
  image: string;
  price: number;
  souldOut?: boolean;
};

export default function CartProduct({
  label,
  image,
  price,
  souldOut,
}: CartProductProps) {
  return (
    <article className="flex items-start">
      <Image
        className="mr-2"
        src={image}
        alt={`Imagem ilustrativa de ${label}`}
        width={80}
        height={80}
      />
      <div className="grow overflow-hidden mb-3">
        <h6 className="font-medium text-xs break-words mb-[5px]">{label}</h6>

        {souldOut ? (
          <>
            <p className="text-brand-secondary text-xs font-medium mb-[10px]">
              Produto esgotado
            </p>
          </>
        ) : (
          <>
            <p className="text-text-light text-xs font-normal">
              1 un {currencyConverter(price)}
            </p>
            <p className="text-xs font-medium mb-[10px]">
              2 un {currencyConverter(price)}
            </p>
          </>
        )}

        {!souldOut && (
          <div className="flex items-center h-[27px]">
            <button className="bg-white border border-background-softLight h-full p-2 flex items-center justify-center font-normal text-base">
              -
            </button>
            <input
              className="w-[30px] h-full bg-background-softLight focus:outline-none text-xs font-normal text-center reset-number-input"
              type="number"
            />
            <button className="bg-white border border-background-softLight h-full p-2 flex items-center justify-center font-normal text-base">
              +
            </button>
          </div>
        )}
      </div>
      <button className="group flex justify-center items-center p-[6px]">
        <Icon
          className="h-5 w-5 group-hover:text-brand-secondary"
          icon="heroicons:trash"
        />
      </button>
    </article>
  );
}
