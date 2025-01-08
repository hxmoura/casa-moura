import { RefObject, TouchEvent, useEffect, useRef, useState } from "react";

interface UseSlides {
  handleTouchStart: (evt: TouchEvent) => void;
  handleTouchMove: (evt: TouchEvent) => void;
  handleTouchEnd: () => void;
  handleNextImg: () => void;
  handlePrevImg: () => void;
  currentImg: number;
  handleCurrentImg: (number: number) => void;
  carouselImagesRefs: RefObject<HTMLImageElement[]>;
  carouselContainerRef: RefObject<HTMLDivElement>;
}

export default function useSlides(images: String[]): UseSlides {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [touchAcive, setTouchActive] = useState<boolean>(false);

  const carouselImagesRefs = useRef<HTMLImageElement[]>([]);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);

  let xDown: number | null = null;

  function handleNextImg() {
    setCurrentImg((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  }

  function handlePrevImg() {
    setCurrentImg((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  }

  function handleCurrentImg(number: number) {
    setCurrentImg(number);
  }

  useEffect(() => {
    const carousel = carouselContainerRef.current;
    const image = carouselImagesRefs.current[currentImg];

    if (carousel) {
      const scrollLeft =
        image.offsetLeft - (carousel.offsetWidth - image.offsetWidth) / 2;

      carousel.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentImg, carouselImagesRefs]);

  function handleTouchStart(evt: TouchEvent) {
    xDown = evt.touches[0].clientX;
  }

  function handleTouchMove(evt: TouchEvent) {
    if (!xDown || touchAcive) return;

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff)) {
      setTouchActive(true);
      return xDiff > 0 ? handleNextImg() : handlePrevImg();
    }

    xDown = null;
  }

  function handleTouchEnd() {
    setTouchActive(false);
  }

  return {
    handleNextImg,
    handlePrevImg,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentImg,
    carouselImagesRefs,
    carouselContainerRef,
    handleCurrentImg,
  };
}
