/* eslint-disable @next/next/no-img-element */
interface CardProps {
  link: string;
  logo: string;
}

export default function Card({ link, logo }: CardProps) {
  return (
    <a
      href={link}
      className="flex-shrink-0 w-32 h-32 rounded-lg border border-background-softLight p-3 hover:border-brand-secondary transition-colors"
    >
      <img src={logo} alt="Lorenzetti" className="w-full h-full" />
    </a>
  );
}
