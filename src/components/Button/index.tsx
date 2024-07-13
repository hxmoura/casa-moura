import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  height?: number;
}

export default function Button({
  disabled,
  loading,
  children,
  height = 44,
}: ButtonProps) {
  return (
    <button
      className="bg-brand-secondary rounded-lg w-full text-white flex items-center justify-center font-medium disabled:bg-background-softLight disabled:text-text-light disabled:cursor-not-allowed hover:bg-brand-secondaryDark relative overflow-hidden"
      style={{ height: `${height}px` }}
      disabled={disabled}
    >
      <span
        className={`${loading ? "-translate-y-10" : "translate-y-0"} transition-transform duration-300`}
      >
        {children}
      </span>
      <span
        className={`${loading ? "translate-y-0" : "translate-y-10"} transition-transform duration-300 absolute`}
      >
        <Icon icon="gg:spinner" className="w-7 h-7 animate-rotate" />
      </span>
    </button>
  );
}
