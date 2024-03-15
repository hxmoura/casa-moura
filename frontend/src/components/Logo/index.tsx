import { Icon } from "@iconify/react";

interface LogoProps {
  link?: boolean;
}

export default function Logo({ link }: LogoProps) {
  return (
    <>
      {link ? (
        <h1>
          <a className="flex items-center justify-center gap-2" href="/">
            <Icon
              className="w-7 h-7 lg:w-9 lg:h-9 text-brand-secondary"
              icon="clarity:home-solid"
            />
            <span className="font-semibold text-2xl lg:text-3xl text-brand-secondary">
              Moura
            </span>
          </a>
        </h1>
      ) : (
        <h1 className="flex items-center justify-center gap-2">
          <Icon
            className="w-7 h-7 lg:w-9 lg:h-9 text-brand-secondary"
            icon="clarity:home-solid"
          />
          <span className="font-semibold text-2xl lg:text-3xl text-brand-secondary">
            Moura
          </span>
        </h1>
      )}
    </>
  );
}
