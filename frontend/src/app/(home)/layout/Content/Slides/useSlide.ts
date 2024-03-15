import {
  useRef,
  useState,
  useEffect,
  TouchEvent,
  useCallback,
  RefObject,
} from "react";

import card1desktop from "./img/card1-desktop.svg";
import card2desktop from "./img/card2-desktop.svg";
import card3desktop from "./img/card3-desktop.svg";

import card1tablet from "./img/card1-tablet.svg";
import card2tablet from "./img/card2-tablet.svg";
import card3tablet from "./img/card3-tablet.svg";

import card1mobile from "./img/card1-mobile.svg";
import card2mobile from "./img/card2-mobile.svg";
import card3mobile from "./img/card3-mobile.svg";

interface useSlide {
  handleTouchStart: (evt: TouchEvent) => void;
  handleTouchMove: (evt: TouchEvent) => void;
  handleTouchEnd: () => void;
  images: any[];
  carouselImagesRefs: RefObject<HTMLImageElement[]>;
  disableButton: boolean;
  handleRight: () => void;
  handleLeft: () => void;
  imageIndex: number;
  carouselContainerRef: RefObject<HTMLDivElement>;
}

export default function useSlide(): useSlide {
  const [width, setWidth] = useState<number>(1500);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const [callFn, setCallFn] = useState<boolean>(false);
  let xDown: number | null = null;

  const imagesDesktop = [card1desktop, card2desktop, card3desktop];
  const imagesTablet = [card1tablet, card2tablet, card3tablet];
  const imagesMobile = [card1mobile, card2mobile, card3mobile];
  const images =
    width <= 450
      ? imagesMobile
      : width >= 451 && width <= 900
        ? imagesTablet
        : imagesDesktop;

  const carouselImagesRefs = useRef<HTMLImageElement[]>([]);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);

  const handleRight = useCallback(() => {
    setDisableButton(true);
    setTimeout(() => setDisableButton(false), 600);

    setDisableButton(true);

    if (imageIndex + 1 >= images.length) {
      setImageIndex(0);
    } else {
      setImageIndex((prevState) => prevState + 1);
    }
  }, [imageIndex, images]);

  function handleLeft() {
    setDisableButton(true);
    setTimeout(() => setDisableButton(false), 600);

    if (imageIndex <= 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex((prevState) => prevState - 1);
    }
  }

  function handleTouchStart(evt: TouchEvent) {
    xDown = evt.touches[0].clientX;
  }

  function handleTouchMove(evt: TouchEvent) {
    if (!xDown || callFn) return;

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff)) {
      setCallFn(true);
      return xDiff > 0 ? handleRight() : handleLeft();
    }

    xDown = null;
  }

  function handleTouchEnd() {
    setCallFn(false);
  }

  useEffect(() => {
    const carousel = carouselContainerRef.current;
    const image = carouselImagesRefs.current[imageIndex];

    const scrollLeft =
      image.offsetLeft - (carousel!.offsetWidth - image.offsetWidth) / 2;

    carousel!.scroll({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [imageIndex, carouselImagesRefs]);

  useEffect(() => {
    const timer = setInterval(handleRight, 10000);
    return () => clearInterval(timer);
  }, [handleRight]);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
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
  };
}
