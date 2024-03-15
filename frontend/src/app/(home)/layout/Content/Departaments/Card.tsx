import { Icon } from "@iconify/react";

interface CardProps {
  link: string;
  icon: string;
  label: string;
}

export default function Card({ link, icon, label }: CardProps) {
  return (
    <a href={link} className="flex flex-col gap-4 flex-shrink-0 group">
      <Icon
        icon={icon}
        className="bg-brand-secondary group-hover:bg-brand-secondaryDark text-white rounded-full w-20 h-20 p-4"
      />
      <span className="text-sm text-center w-20">{label}</span>
    </a>
  );
}
