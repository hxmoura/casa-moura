import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface CheckboxProps {
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  name?: string;
  size?: number;
  rounded?: number;
}

export default function Checkbox({
  onChange,
  checked,
  name,
  size = 20,
  rounded = 4,
}: CheckboxProps) {
  return (
    <div
      className="relative"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    >
      <input
        type="checkbox"
        className="peer w-full h-full cursor-pointer appearance-none transition-all bg-background-softLight checked:bg-brand-secondary"
        style={{ borderRadius: `${rounded}px` }}
        onChange={onChange}
        checked={checked}
        name={name}
      />
      <Icon
        icon="bi:check"
        className="text-white opacity-0 peer-checked:opacity-100 w-full h-full absolute pointer-events-none top-0"
      />
    </div>
  );
}
