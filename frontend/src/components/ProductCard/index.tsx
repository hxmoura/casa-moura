import { Icon } from '@iconify/react';
import Image from 'next/image';
import Promotion from '@/assets/promotion.svg';
import Button from './Button';

interface ProductCardProps {
  promotion?: boolean;
}

export default function ProductCard({ promotion }: ProductCardProps) {
  return (
    <article className="w-[200px] h-[316px] flex-shrink-0 bg-white border border-background-softLight rounded-md p-[10px] overflow-hidden whitespace-break-spaces flex flex-col relative">
      {promotion && (
        <Image
          className="absolute left-0 top-0"
          src={Promotion}
          alt="Promoção"
          width={74}
          height={74}
        />
      )}
      <Image
        src="https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/u/furadeira-de-impacto-gsb-450-re-bosch_240611_5.jpg"
        alt="Produto"
        width={180}
        height={180}
      />
      <div className="grow">
        <h5 className="text-xs font-normal mb-[5px]">TASDASD</h5>
        {promotion && (
          <p className="text-xs text-text-light font-normal line-through">
            De asdads
          </p>
        )}
        <p className="text-sm font-medium">
          {promotion && 'Por '}
          preço
        </p>
      </div>
      <Button>
        <Icon
          icon="heroicons-outline:shopping-cart"
          className="hover:text-white mr-2"
          width={15}
          height={15}
        />
        <span className="text-xs font-normal group-hover:text-white">
          Adicionar
        </span>
      </Button>
    </article>
  );
}
