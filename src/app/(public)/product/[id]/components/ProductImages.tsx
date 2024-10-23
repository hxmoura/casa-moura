import Magnify from "@/components/Magnify";
import useSlides from "@/hooks/useSlides";
import { Product } from "@/types/product";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef } from "react";

export default function ProductImages({ product }: { product: Product }) {
  const refOfSelectedImage = useRef<HTMLButtonElement>(null);

  const {
    handleNextImg,
    handlePrevImg,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    currentImg,
    carouselImagesRefs,
    carouselContainerRef,
    handleCurrentImg,
  } = useSlides(product.images);

  useEffect(() => {
    if (refOfSelectedImage.current) {
      refOfSelectedImage.current.scrollIntoView({
        block: "nearest",
      });
    }
  }, [currentImg]);

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
          <div className="flex lg:flex-col gap-6 overflow-auto disable-scroll scroll-smooth">
            {product.images.map((image, index) => (
              <button
                key={index}
                ref={index === currentImg ? refOfSelectedImage : null}
                onClick={() => handleCurrentImg(index)}
                className={`relative border-2 overflow-hidden rounded-full ${index === currentImg ? "border-brand-secondary" : "border-background-softLight"} flex-shrink-0`}
              >
                <img
                  src={image}
                  alt="Imagem ilustrativa"
                  className="w-16 h-16"
                  draggable={false}
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

      <div className="relative order-1 lg:order-2">
        <div
          className="flex items-start justify-start max-w-[430px] max-h-[430px] overflow-hidden"
          ref={carouselContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {product.images.map((image, index) => (
            <Magnify
              key={index}
              image={image}
              imgRef={(img) => {
                carouselImagesRefs.current![index] = img!;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
