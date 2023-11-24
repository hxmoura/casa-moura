'use client';
import { useEffect } from 'react';
import useScroll from './useScroll';

interface ScrollProps {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setScrollRef: (ref: any) => void;
}

export default function Scroll({
  children,
  setScrollRef,
  className,
}: ScrollProps) {
  const { handleMouseDown, handleMouseUp, scrollRef } = useScroll();

  useEffect(() => {
    setScrollRef(scrollRef);
  }, [scrollRef, setScrollRef]);

  return (
    <>
      <div
        ref={scrollRef}
        className={`horizontal-scroll flex overflow-x-scroll gap-6 whitespace-nowrap
          ${className || ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </div>
    </>
  );
}
