import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface CheckboxProps {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  name?: string;
}

export default function Checkbox({ onChange, checked, name }: CheckboxProps) {
  return (
    <div className="relative h-5 w-5">
      <input
        type="checkbox"
        className="peer w-full h-full cursor-pointer appearance-none rounded-md transition-all bg-background-softLight checked:bg-brand-secondary"
        id="checkbox"
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
