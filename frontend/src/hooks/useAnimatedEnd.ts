import { useState, useEffect, useRef } from "react";

export default function useAnimatedUnmount(visible: boolean) {
  const [shouldRender, setShouldRender] = useState<boolean>(visible);
  const animatedElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;

    if (!visible && elementRef) {
      elementRef.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}
