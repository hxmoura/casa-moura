import { Icon } from "@iconify/react/dist/iconify.js";
import { MenuOptions } from "./MenuOptions";
import { useState } from "react";

interface OptionMobile {
  children: React.ReactNode;
  option: MenuOptions;
}

export default function MenuMobile({ children, option }: OptionMobile) {
  const [selectedMenuMobile, setSelectedMenuMobile] = useState<MenuOptions>(
    MenuOptions.notSelected,
  );

  return (
    <li>
      <button
        className="flex items-center justify-between border-b border-background-softLight pb-5 w-full"
        onClick={() =>
          setSelectedMenuMobile((prevState) =>
            prevState === option ? MenuOptions.notSelected : option,
          )
        }
      >
        <span className="font-medium text-lg">{option}</span>
        <Icon
          className="w-5 h-5"
          icon={selectedMenuMobile === option ? "lucide:minus" : "lucide:plus"}
        />
      </button>
      {selectedMenuMobile === option && <>{children}</>}
    </li>
  );
}
