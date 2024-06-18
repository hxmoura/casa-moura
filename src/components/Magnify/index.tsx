import useScreenWidth from "@/hooks/useScreenWidth";
import React, { MouseEvent, useState } from "react";

interface MagnifyProps {
  image: string;
  imgRef?: (img: HTMLImageElement | null) => void;
  magnifySize?: number;
}

export default function Magnify({
  image,
  imgRef,
  magnifySize = 160,
}: MagnifyProps) {
  const { isDesktop } = useScreenWidth();
  const [magnify, setMagnify] = useState<object>({
    backgroundImage: `url(${image})`,
  });

  const magnifySizeHalf = magnifySize / 2;

  function handleMouseMove(event: MouseEvent) {
    if (isDesktop) {
      const { offsetX, offsetY, target } = event.nativeEvent;
      const { offsetWidth, offsetHeight } = target as HTMLElement;

      const xPercentage = (offsetX / offsetWidth) * 100;
      const yPercentage = (offsetY / offsetHeight) * 100;

      setMagnify((prev) => ({
        ...prev,
        display: "block",
        top: `${offsetY - magnifySizeHalf}px`,
        left: `${offsetX - magnifySizeHalf}px`,
        backgroundPosition: `${xPercentage}% ${yPercentage}%`,
      }));
    }
  }

  function handleMouseLeave() {
    if (isDesktop) {
      setMagnify((prev) => ({ ...prev, display: "none" }));
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-w-full h-full cursor-none"
    >
      <img src={image} alt="Image" ref={imgRef} draggable={false} />
      {isDesktop && (
        <div
          className="absolute bg-no-repeat rounded-full border-2 border-background-softLight bg-center bg-500 pointer-events-none hidden animate-scaleUp"
          style={{ ...magnify, width: magnifySize, height: magnifySize }}
        ></div>
      )}
    </div>
  );
}
