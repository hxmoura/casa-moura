"use client";

import { ReactNode, useState } from "react";
import ScrollButton from "./ScrollButton";
import useScroll from "./useScroll";
import useAnimatedUnmount from "@/hooks/useAnimatedEnd";

interface ScrollContainerProps {
  children: ReactNode;
  type?: "fixed" | "animated";
  spacing?: number;
}

export default function ScrollContainer({
  children,
  type,
  spacing = 24,
}: ScrollContainerProps) {
  const [visible, setVisible] = useState(false);
  const { scrollRef, handleLeft, handleRight, handleMouseDown, handleMouseUp } =
    useScroll();
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  return (
    <>
      <div
        className="relative mt-7 overflow-hidden"
        onMouseEnter={() => type === "animated" && setVisible(true)}
        onMouseLeave={() => type === "animated" && setVisible(false)}
      >
        <div
          ref={scrollRef}
          className={`flex overflow-x-scroll disable-scroll scroll-smooth relative`}
          style={{ gap: `${spacing}px` }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {children}
        </div>
        {type === "animated" && shouldRender && (
          <div ref={animatedElementRef} className="hidden lg:flex">
            <div
              className={`absolute top-2/4 left-0 animate-entryLeft ${!visible && "animate-exitLeft"}`}
            >
              <ScrollButton direction="left" onClick={handleLeft} />
            </div>
            <div
              className={`absolute top-2/4 right-0 animate-entryRight ${!visible && "animate-exitRight"}`}
            >
              <ScrollButton direction="right" onClick={handleRight} />
            </div>
          </div>
        )}
      </div>

      {type === "fixed" && (
        <div className="hidden lg:flex gap-2 absolute top-0 right-0">
          <ScrollButton direction="left" onClick={handleLeft} type="small" />
          <ScrollButton direction="right" onClick={handleRight} type="small" />
        </div>
      )}
    </>
  );
}
