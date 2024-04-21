"use client";

import { Icon } from "@iconify/react";
import Container from "@/components/Container";
import useSlide from "./useSlide";

export default function Slides() {
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    images,
    carouselImagesRefs,
    disableButton,
    handleRight,
    handleLeft,
    imageIndex,
    carouselContainerRef,
  } = useSlide();

  return (
    <section className="mb-12 lg:mt-12 lg:mb-20">
      <Container noPadding>
        <div className="flex flex-col items-center relative">
          <div
            ref={carouselContainerRef}
            className="flex items-start justify-start overflow-hidden lg:rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <a href="#" key={index} className="min-w-full">
                <img
                  src={image.src}
                  alt={`Banner ${index + 1}`}
                  ref={(img) => {
                    carouselImagesRefs.current![index] = img!;
                  }}
                />
              </a>
            ))}
          </div>
          <div>
            <button
              disabled={disableButton}
              className="hidden absolute left-5 top-1/2 text-white bg-background-dark rounded-full h-12 w-12 lg:flex justify-center items-center bg-opacity-30 -translate-y-2/4"
              onClick={handleLeft}
            >
              <Icon
                icon="heroicons:chevron-left-20-solid"
                className="w-10 h-10"
              />
            </button>

            <button
              disabled={disableButton}
              className="hidden lg:flex absolute right-5 top-1/2 text-white bg-background-dark rounded-full h-12 w-12 justify-center items-center bg-opacity-30 -translate-y-2/4"
              onClick={handleRight}
            >
              <Icon
                icon="heroicons:chevron-right-20-solid"
                className="w-10 h-10"
              />
            </button>
          </div>
          <div className="flex gap-1 mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                className={`bg-background-softLight w-8 h-1 rounded-full ${imageIndex === index && "bg-brand-secondary"}`}
              ></span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
