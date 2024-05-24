import { Product } from "@/types/product";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MouseEvent, useEffect, useRef, useState } from "react";

export default function ProductImages({ product }: { product: Product }) {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [magnify, setMagnify] = useState<object>({});
  const selectedRef = useRef<HTMLButtonElement>(null);

  const magnifySize = 160;
  const magnifySizeHalf = magnifySize / 2;

  useEffect(() => {
    setMagnify((prev) => ({
      ...prev,
      backgroundImage: `url(${product.images[currentImg]})`,
    }));

    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "nearest",
      });
    }
  }, [currentImg, product.images]);

  function handleMouseMove(event: MouseEvent) {
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

  function handleMouseLeave() {
    setMagnify((prev) => ({ ...prev, display: "none" }));
  }

  function handleNextImg() {
    setCurrentImg((prev) => (prev + 1 >= product.images.length ? 0 : prev + 1));
  }

  function handlePrevImg() {
    setCurrentImg((prev) => (prev <= 0 ? product.images.length - 1 : prev - 1));
  }

  return (
    <section className="flex flex-col gap-6 lg:flex-row items-center justify-center lg:h-[430px] w-full lg:w-2/4">
      {product.images.length > 1 && (
        <div className="w-full lg:w-auto lg:h-full flex items-center lg:flex-col gap-3 order-2 lg:order-1 flex-shrink-0">
          <button onClick={handlePrevImg}>
            <Icon
              icon="iconamoon:arrow-left-2-light"
              className="w-6 h-6 lg:rotate-90"
            />
          </button>
          <div className="flex lg:flex-col gap-6 overflow-auto disableScroll scroll-smooth">
            {product.images.map((image, index) => (
              <button
                key={index}
                ref={index === currentImg ? selectedRef : null}
                onClick={() => setCurrentImg(index)}
                className={`relative border-2 overflow-hidden rounded-full ${index === currentImg ? "border-brand-secondary" : "border-background-softLight"} flex-shrink-0`}
              >
                <img
                  src={image}
                  alt="Imagem ilustrativa"
                  className="w-16 h-16"
                />
                <div
                  className={`absolute inset-0 bg-white bg-opacity-30 ${currentImg === index ? "hidden" : ""}`}
                ></div>
              </button>
            ))}
          </div>
          <button onClick={handleNextImg}>
            <Icon
              icon="iconamoon:arrow-right-2-light"
              className="w-6 h-6 lg:rotate-90"
            />
          </button>
        </div>
      )}
      <div className="max-w-[430px] order-1 lg:order-2 relative cursor-none">
        <img
          src={product.images[currentImg]}
          alt={`Imagem ilustrativa de ${product.name}`}
          className="rounded-2xl w-full h-full object-contain"
          draggable={false}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute bg-no-repeat rounded-full border-2 border-background-softLight bg-center bg-500 pointer-events-none hidden animate-scaleUp"
          style={{ ...magnify, width: magnifySize, height: magnifySize }}
        ></div>
      </div>
    </section>
  );
}
