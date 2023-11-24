import { Icon } from '@iconify/react';
import Link from 'next/link';

type CardProps = {
  icon: string;
  label: string;
  link: string;
};

export default function Card({ icon, label, link }: CardProps) {
  return (
    <article className="w-[130px] h-[130px] flex-shrink-0 rounded-lg border border-background-softLight hover:border-brand-secondary transition-colors overflow-hidden">
      <Link
        href={link}
        className="p-2 h-full w-full flex flex-col items-center justify-center gap-4"
      >
        <Icon className="text-brand-secondary w-10 h-10" icon={icon} />
        <p className="text-center font-medium text-sm whitespace-normal">
          {label}
        </p>
      </Link>
    </article>
  );
}
