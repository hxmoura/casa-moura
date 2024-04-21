interface LinkProps {
  label: string;
  url: string;
}

export default function Link({ label, url }: LinkProps) {
  return (
    <li>
      <a href={url} className="text-sm hover:text-brand-secondary">
        {label}
      </a>
    </li>
  );
}
