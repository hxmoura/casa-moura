import Button from '@/components/ProductCard/Button';

type CardProps = {
  image: string;
  title: string;
};

export default function Card({ image, title }: CardProps) {
  return (
    <article className="w-[312px] h-[330px] flex-shrink-0 border border-background-softLight p-[10px] rounded-md flex flex-col overflow-hidden">
      <img className="rounded-md w-full h-[180px]" src={image} />
      <h5 className="text-base font-medium mt-4 grow whitespace-normal">
        {title}
      </h5>
      <Button>Saiba mais</Button>
    </article>
  );
}
