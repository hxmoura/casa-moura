import Link from "next/link";

interface LinkProps {
  label: string;
  url: string;
}

export default function Option({ label, url }: LinkProps) {
  return (
    <li>
      <Link href={url} className="text-sm hover:text-brand-secondary">
        {label}
      </Link>
    </li>
  );
}
