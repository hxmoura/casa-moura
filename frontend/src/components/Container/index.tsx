import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  noPadding?: boolean;
}

export default function Container({ children, noPadding }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-container h-full w-full lg:px-4
        ${noPadding ? 'px-0' : 'px-4'}
      `}
    >
      {children}
    </div>
  );
}
