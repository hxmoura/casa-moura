interface InputRadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

export default function InputRadio({
  name,
  value,
  checked,
  onChange,
}: InputRadioProps) {
  return (
    <input
      type="radio"
      id={value}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="appearance-none cursor-pointer border border-text-light w-4 h-4 rounded-full input-radio relative checked:border-brand-secondary"
    />
  );
}
