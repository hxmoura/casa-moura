import responsive from "@/utils/breakpoints";
import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number>(1500);

  let isMobile = screenWidth < responsive.breakpoints.md;
  let isTablet =
    screenWidth >= responsive.breakpoints.md &&
    screenWidth < responsive.breakpoints.lg;
  let isDesktop = screenWidth >= responsive.breakpoints.lg;

  function handleWidth() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWidth();

    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return { screenWidth, isMobile, isTablet, isDesktop };
}
