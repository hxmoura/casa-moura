import { Icon } from "@iconify/react";

interface CardProps {
  link: string;
  icon: string;
  label: string;
}

export default function Card({ link, icon, label }: CardProps) {
  return (
    <a href={link} className="flex flex-col gap-4 flex-shrink-0 group">
      <div className="bg-brand-secondary group-hover:bg-brand-secondaryDark w-20 h-20 p-4 rounded-full flex items-center justify-center">
        <Icon icon={icon} className=" text-white h-full w-full" />
      </div>
      <span className="text-sm text-center w-20">{label}</span>
    </a>
  );
}
