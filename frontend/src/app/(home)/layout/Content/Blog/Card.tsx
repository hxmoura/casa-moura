import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

interface CardProps {
  img?: string;
  title: string;
  link: string;
}

export default function Card({ img, title, link }: CardProps) {
  return (
    <article className="w-[312px] h-[330px] flex-shrink-0 border border-background-softLight rounded-md p-2 bg-white overflow-hidden flex flex-col">
      {img ? (
        <Image
          src={img}
          alt="img"
          width={292}
          height={180}
          className="rounded-md"
        />
      ) : (
        <div className="bg-background-softLight w-[292px] h-[180px] rounded-md flex items-center justify-center">
          <Icon icon="carbon:no-image" className="w-11 h-11" />
        </div>
      )}
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
