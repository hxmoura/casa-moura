import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  height?: number;
  width?: number;
  style?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
}

export default function Button({
  disabled,
  loading,
  children,
  height = 40,
  width,
  style = "primary",
  type = "button",
  href,
  onClick,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-brand-secondary text-white border-transparent hover:bg-brand-secondaryDark",
    secondary:
      "text-brand-secondary border-brand-secondary hover:text-white hover:bg-brand-secondary",
    outline: "text-text-light border-text-light hover:bg-background-light",
  };

  return (
    <>
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          className={`border rounded w-full flex items-center justify-center text-sm transition-all
            ${style === "primary" && styles.primary}
            ${style === "secondary" && styles.secondary}
            ${style === "outline" && styles.outline}
          `}
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`border rounded w-full flex items-center justify-center disabled:bg-background-softLight disabled:text-text-light disabled:cursor-not-allowed relative overflow-hidden text-sm transition-all
            ${style === "primary" && styles.primary}
            ${style === "secondary" && styles.secondary}
            ${style === "outline" && styles.outline}
          `}
          style={{ height: `${height}px`, width: `${width}px` }}
          onClick={onClick}
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
      )}
    </>
  );
}
