import { Icon } from "@iconify/react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <li className="flex items-center gap-5 flex-shrink-0">
      <Icon icon={icon} className="text-brand-secondary h-12 w-12" />
      <div>
        <strong className="text-lg font-medium">{title}</strong>
        <p>{description}</p>
      </div>
    </li>
  );
}
