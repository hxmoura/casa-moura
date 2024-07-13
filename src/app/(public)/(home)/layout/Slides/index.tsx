"use client";

import { Icon } from "@iconify/react";
import Container from "@/components/Container";
import Link from "next/link";
import useSlides from "@/hooks/useSlides";

import card1desktop from "./img/card1-desktop.svg";
import card2desktop from "./img/card2-desktop.svg";
import card3desktop from "./img/card3-desktop.svg";

import card1tablet from "./img/card1-tablet.svg";
import card2tablet from "./img/card2-tablet.svg";
import card3tablet from "./img/card3-tablet.svg";

import card1mobile from "./img/card1-mobile.svg";
import card2mobile from "./img/card2-mobile.svg";
import card3mobile from "./img/card3-mobile.svg";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useEffect } from "react";

export default function Slides() {
  const { isMobile, isTablet } = useScreenWidth();

  const imgsDesktop = [card1desktop, card2desktop, card3desktop];
  const imgsTablet = [card1tablet, card2tablet, card3tablet];
  const imgsMobile = [card1mobile, card2mobile, card3mobile];
  const images = isMobile ? imgsMobile : isTablet ? imgsTablet : imgsDesktop;

  const {
    carouselContainerRef,
    carouselImagesRefs,
    currentImg,
    handleNextImg,
    handlePrevImg,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useSlides(images);

  useEffect(() => {
    const timer = setInterval(handleNextImg, 10000);
    return () => clearInterval(timer);
  }, [handleNextImg]);

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
              <Link href="#" key={index} className="min-w-full">
                <img
                  src={image.src}
                  alt={`Banner ${index + 1}`}
                  ref={(img) => {
                    carouselImagesRefs.current![index] = img!;
                  }}
                  draggable={false}
                />
              </Link>
            ))}
          </div>
          <div>
            <button
              className="hidden absolute left-5 top-1/2 text-white bg-background-dark rounded-full h-12 w-12 lg:flex justify-center items-center bg-opacity-30 -translate-y-2/4"
              onClick={handlePrevImg}
            >
              <Icon
                icon="heroicons:chevron-left-20-solid"
                className="w-10 h-10"
              />
            </button>

            <button
              className="hidden lg:flex absolute right-5 top-1/2 text-white bg-background-dark rounded-full h-12 w-12 justify-center items-center bg-opacity-30 -translate-y-2/4"
              onClick={handleNextImg}
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
                className={`bg-background-softLight w-8 h-1 rounded-full ${currentImg === index && "bg-brand-secondary"}`}
              ></span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
