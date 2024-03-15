import { createRef } from "react";

export default function useScroll() {
  const scrollRef = createRef<HTMLDivElement>();

  function handleLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 600;
    }
  }

  function handleRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 600;
    }
  }

  return { handleLeft, handleRight, scrollRef };
}
