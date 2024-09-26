"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { MouseEvent, useState } from "react";

interface AuthInputProps {
  type?: "text" | "password" | "email";
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  error?: string;
  eyePassword?: boolean;
}

export default function AuthInput({
  type = "text",
  onChange,
  value,
  label,
  error,
  eyePassword,
}: AuthInputProps) {
  const [typePassword, setTypePassword] = useState<"password" | "text">(
    "password",
  );

  function handlePassword(evt: MouseEvent) {
    evt.preventDefault();
    setTypePassword((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <div className="flex flex-1 flex-col gap-2">
      <label className="text-xs font-medium" htmlFor={label}>
        {label}
      </label>
      <div className="relative">
        {eyePassword && (
          <button onClick={handlePassword}>
            <Icon
              icon={
                typePassword === "password" ? "lucide:eye-off" : "lucide:eye"
              }
              className="absolute w-5 h-5 text-text-light top-1/2 -translate-y-1/2 right-2"
            />
          </button>
        )}
        <input
          type={eyePassword ? typePassword : type}
          id={label}
          onChange={onChange}
          value={value}
          className={`rounded border border-background-softLight h-10 p-2 text-xs outline-none focus:border-notify-info w-full ${error && "border-notify-error"}`}
        />
      </div>
      <p className="text-notify-error text-xs">{error}</p>
    </div>
  );
}
