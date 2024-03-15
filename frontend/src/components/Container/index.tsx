import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  noPadding?: boolean;
}

export default function Container({ children, noPadding }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-container w-full h-full lg:px-6
        ${noPadding ? "px-0" : "px-3"}
      `}
    >
      {children}
    </div>
  );
}
