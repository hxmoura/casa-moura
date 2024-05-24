import { Icon } from "@iconify/react/dist/iconify.js";

interface SocialProps {
  icon: string;
  url: string;
}

export default function Social({ icon, url }: SocialProps) {
  return (
    <li className="bg-brand-secondary border border-brand-secondary hover:bg-white rounded-full w-11 h-11 transition-colors">
      <a
        href={url}
        className="w-full h-full text-white hover:text-brand-secondary flex items-center justify-center transition-colors"
      >
        <Icon icon={icon} className="w-7 h-7 " />
      </a>
    </li>
  );
}
