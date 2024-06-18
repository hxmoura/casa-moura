import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { MenuOptions } from "../../app/produto/[id]/components/MenuOptions";

interface OptionMobile {
  children: React.ReactNode;
  label: string | MenuOptions;
}

export default function MenuDropdown({ children, label }: OptionMobile) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <li>
      <button
        className="flex items-center justify-between border-b border-background-softLight pb-5 w-full"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <span className="font-medium text-lg">{label}</span>
        <Icon
          className="w-5 h-5"
          icon={openMenu ? "lucide:minus" : "lucide:plus"}
        />
      </button>
      {openMenu && <>{children}</>}
    </li>
  );
}
