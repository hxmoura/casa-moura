import { Icon } from "@iconify/react/dist/iconify.js";

interface PaymentIconProps {
  icon: string;
  width: number;
  height: number;
  color?: string;
}

export default function PaymentIcon({
  icon,
  width,
  height,
  color,
}: PaymentIconProps) {
  return (
    <li>
      <Icon
        icon={icon}
        style={{ width: `${width}px`, height: `${height}px`, color }}
      />
    </li>
  );
}
