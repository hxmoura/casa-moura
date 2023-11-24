interface MenuItemProps {
  label: string;
  link: string;
}

export default function MenuItem({ label, link }: MenuItemProps) {
  return (
    <li className="group cursor-pointer lg:w-56">
      <a
        className="text-sm text-white lg:text-text-main group-hover:font-semibold group-hover:text-brand-secondary group-hover:bg-red-100 block px-4 md:px-5 py-2"
        href={link}
      >
        {label}
      </a>
    </li>
  );
}
