import { Icon } from '@iconify/react';

interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function Card({ icon, title, subtitle }: CardProps) {
  return (
    <article className="flex items-center">
      <Icon className="text-brand-secondary w-12 h-12 mr-5" icon={icon} />
      <div className="flex flex-col">
        <strong className="text-lg font-medium">{title}</strong>
        <span className="text-base font-normal">{subtitle}</span>
      </div>
    </article>
  );
}
