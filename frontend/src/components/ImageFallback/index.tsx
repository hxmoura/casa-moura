import { Icon } from "@iconify/react";
import { useState } from "react";

interface ImageFallbackProps {
  image: string;
  className?: string;
  classNameFallback?: string;
}

export default function ImageFallback({
  image,
  className,
  classNameFallback,
}: ImageFallbackProps) {
  const [loadedImage, setLoadedImage] = useState(true);

  return (
    <>
      {loadedImage ? (
        <img
          src={image}
          alt=""
          onError={() => setLoadedImage(false)}
          className={className}
        />
      ) : (
        <div
          className={`flex items-center justify-center ${classNameFallback || ""}`}
        >
          <Icon icon="carbon:no-image" className="w-12 h-12" />
        </div>
      )}
    </>
  );
}
