import useAnimatedUnmount from "@/hooks/useAnimatedEnd";
import { MouseEvent, useEffect } from "react";

interface NovoProps {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  position: "left" | "right" | "center";
  className?: string;
}

export default function Modal({
  children,
  openModal,
  setOpenModal,
  position,
  className,
}: NovoProps) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(openModal);

  useEffect(() => {
    document.body.style.overflow = shouldRender ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [shouldRender]);

  function handleCloseModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  }

  if (!shouldRender) {
    return null;
  }

  const center = position === "center";
  const right = position === "right";
  const left = position === "left";

  return (
    <>
      {shouldRender && (
        <section
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 ${!openModal && "bg-opacity-0"} transition-all flex items-center justify-center z-50`}
          onClick={handleCloseModal}
        >
          <div
            ref={animatedElementRef}
            className={`
              bg-white
              ${center && "animate-fadeIn"}
              ${!openModal && center && "animate-fadeOut"}

              ${left && "animate-entryLeft absolute left-0"} 
              ${!openModal && left && "animate-exitLeft"}

              ${right && "animate-entryRight absolute right-0"} 
              ${!openModal && right && "animate-exitRight"}
              
              ${className || ""}
            `}
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
}
