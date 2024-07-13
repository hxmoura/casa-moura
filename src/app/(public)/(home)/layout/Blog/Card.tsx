import ImageFallback from "@/components/ImageFallback";

interface CardProps {
  img: string;
  title: string;
  link: string;
}

export default function Card({ img, title, link }: CardProps) {
  return (
    <article className="w-[312px] h-[330px] flex-shrink-0 border border-background-softLight rounded-md p-2 bg-white overflow-hidden flex flex-col">
      <ImageFallback
        image={img}
        className="rounded-md w-full h-[180px] object-cover"
        classNameFallback="bg-background-softLight w-full h-[180px] rounded-md"
      />
      <h6 className="font-medium mt-4">{title}</h6>
      <a
        href={link}
        className="text-xs hover:text-white bg-background-light rounded-md w-full h-[30px] hover:bg-brand-secondary transition-colors mt-auto flex items-center justify-center"
      >
        Saiba mais
      </a>
    </article>
  );
}
