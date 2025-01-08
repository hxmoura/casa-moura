import { Icon } from "@iconify/react";

interface ScrollButtonProps {
  onClick: () => void;
  direction: "right" | "left";
  type?: "large" | "small";
}

export default function ScrollButton({
  onClick,
  direction,
  type = "large",
}: ScrollButtonProps) {
  return (
    <>
      {type === "small" ? (
        <button
          onClick={onClick}
          className={`w-7 h-7 bg-background-softLight rounded-full flex justify-center items-center
                ${direction === "right" && "bg-brand-secondary hover:bg-brand-secondaryDark text-white"}`}
        >
          <Icon
            icon={
              direction === "right"
                ? "heroicons:arrow-right"
                : "heroicons:arrow-left"
            }
            className="w-5 h-5"
          />
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`bg-brand-secondary w-10 h-10 rounded-full text-white flex justify-center items-center border border-brand-secondaryDark hover:bg-white hover:text-brand-secondary`}
        >
          <Icon
            icon={
              direction === "right"
                ? "heroicons:chevron-right-20-solid"
                : "heroicons:chevron-left-20-solid"
            }
            className="w-7 h-7"
          />
        </button>
      )}
    </>
  );
}
