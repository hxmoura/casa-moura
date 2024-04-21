interface CardProps {
  link: string;
  logo: string;
  name: string;
}

export default function Card({ link, logo, name }: CardProps) {
  return (
    <a
      href={link}
      className="flex-shrink-0 w-32 h-32 rounded-lg border border-background-softLight p-3 hover:border-brand-secondary transition-colors"
    >
      <img src={logo} alt={name} className="w-full h-full object-contain" />
    </a>
  );
}
