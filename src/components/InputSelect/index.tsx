import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent } from "react";

interface InputSelectProps {
  label?: string;
  value: string | number;
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; label: string | number }[];
  placeholder?: string;
  error?: string;
  name?: string;
}

export default function InputSelect({
  label,
  value,
  options,
  placeholder,
  error,
  name,
  onChange,
}: InputSelectProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label htmlFor={label} className="text-xs font-medium">
        {label}
      </label>
      <div className="relative">
        <select
          id={label}
          value={value}
          name={name}
          onChange={onChange}
          className={`appearance-none border border-background-softLight rounded p-2 h-10 text-xs focus:border-notify-info w-full peer outline-none cursor-pointer bg-white ${error && "border-notify-error"}`}
        >
          <option value={0} disabled hidden>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          icon="eva:arrow-down-fill"
          id="arrow-icon"
          className="absolute right-2 text-background-softDark top-1/2 -translate-y-1/2 pointer-events-none peer-focus:rotate-180"
        />
      </div>
      <p className="text-notify-error text-xs">{error}</p>
    </div>
  );
}
