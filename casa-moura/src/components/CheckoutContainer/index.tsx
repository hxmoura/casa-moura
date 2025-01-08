import { ReactNode } from "react";

interface CheckoutContainerProps {
  children: ReactNode;
  className?: string;
}

export default function CheckoutContainer({
  children,
  className,
}: CheckoutContainerProps) {
  return (
    <section
      className={`lg:border lg:rounded lg:border-background-softLight px-3 py-7 lg:p-7 bg-white ${className || ""} h-min`}
    >
      {children}
    </section>
  );
}
