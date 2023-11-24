import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export default function ButtonCards({ children }: ButtonProps) {
  return (
    <button className="rounded-[5px] w-full h-[30px] bg-background-light text-xs hover:bg-brand-secondary hover:text-white transition-colors flex justify-center items-center">
      {children}
    </button>
  );
}
