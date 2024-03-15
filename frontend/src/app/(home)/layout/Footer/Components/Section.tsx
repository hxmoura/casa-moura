import { Icon } from "@iconify/react";
import { useState, useEffect, ReactNode } from "react";

interface FooterSectionProps {
  children: ReactNode;
  title: string;
}

export default function FooterSection({ children, title }: FooterSectionProps) {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [sectionOpen, setSectionOpen] = useState<boolean>(true);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    if (screenWidth < 900) {
      setSectionOpen(false);
    } else {
      setSectionOpen(true);
    }

    function handleResize() {
      return setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  function handleSection() {
    if (screenWidth < 900) {
      setSectionOpen((prevState: boolean) => !prevState);
    }
  }

  return (
    <section>
      <h5
        className={`flex justify-between items-center ${sectionOpen && "mb-5"}`}
        onClick={handleSection}
      >
        <span className="font-medium text-lg">{title}</span>
        <Icon
          icon="iconamoon:arrow-up-2"
          className={`w-5 h-5 lg:hidden ${sectionOpen ? "rotate-0" : "rotate-180"} transition-transform duration-300`}
        />
      </h5>
      <div className={`${sectionOpen ? "block" : "hidden"}`}>{children}</div>
    </section>
  );
}
