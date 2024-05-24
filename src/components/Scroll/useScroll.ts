import { MouseEvent, createRef } from "react";

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

  function handleMouseMove(event: globalThis.MouseEvent) {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= event.movementX;
    }
  }

  function handleMouseDown(event: MouseEvent) {
    if (scrollRef.current) {
      event.preventDefault();
      scrollRef.current.style.scrollBehavior = "auto";
      document.addEventListener("mousemove", handleMouseMove);
    }
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
  }

  return { handleLeft, handleRight, scrollRef, handleMouseDown, handleMouseUp };
}
