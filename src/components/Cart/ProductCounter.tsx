"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

interface ProductCounterProps {
  onPlus: () => void;
  onMinus: () => void;
  inputValue: number;
  small?: boolean;
}

export default function ProductCounter({
  onPlus,
  onMinus,
  inputValue,
  small,
}: ProductCounterProps) {
  return (
    <div
      className={`border border-background-softLight rounded flex items-center w-full ${small ? "max-w-20 h-7" : "max-w-36 h-11"} overflow-hidden`}
    >
      <button
        className={`h-full ${small ? "w-12" : "w-20"} flex items-center justify-center transition-colors ${inputValue === 1 ? "cursor-default text-text-light" : "hover:bg-brand-secondary hover:text-white"}`}
        onClick={() => inputValue > 1 && onMinus()}
      >
        <Icon
          icon="heroicons:minus"
          className={`${small ? "w-3 h-3" : "w-4 h-4"}`}
        />
      </button>
      <input
        type="text"
        className={`outline-none w-full h-full text-center ${small && "text-xs"}`}
        value={inputValue}
        readOnly
      />
      <button
        className={`h-full ${small ? "w-12" : "w-20"} flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors`}
        onClick={onPlus}
      >
        <Icon
          icon="heroicons:plus"
          className={`${small ? "w-3 h-3" : "w-4 h-4"}`}
        />
      </button>
    </div>
  );
}
