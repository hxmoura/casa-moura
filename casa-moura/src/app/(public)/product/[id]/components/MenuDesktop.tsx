import { useState } from "react";
import { MenuOptions } from "./MenuOptions";
import { InformationsContent, ReviewsContent } from "./ContentMenu";
import { Product } from "@/types/product";

export default function MenuDesktop({ product }: { product: Product }) {
  const [selectedMenu, setSelectedMenu] = useState<MenuOptions>(
    MenuOptions.informations,
  );

  return (
    <div className="hidden lg:block">
      <div className="border-b border-background-softLight flex relative">
        <button
          onClick={() => setSelectedMenu(MenuOptions.informations)}
          className="font-medium text-lg w-1/2 flex justify-center pb-5"
        >
          {MenuOptions.informations}
        </button>
        <button
          onClick={() => setSelectedMenu(MenuOptions.reviews)}
          className="font-medium text-lg w-1/2 flex justify-center pb-5"
        >
          {MenuOptions.reviews}
        </button>
        <div
          className={`absolute bottom-0 ${selectedMenu === MenuOptions.reviews && "translate-x-full"} w-2/4 border-b-2 border-brand-secondary transition-all duration-300`}
        ></div>
      </div>
      <div
        className={`transition-opacity opacity-0 duration-300
          ${selectedMenu === MenuOptions.informations && "opacity-100"}
        `}
      >
        {selectedMenu === MenuOptions.informations &&
          InformationsContent(product)}
      </div>
      <div
        className={`transition-opacity opacity-0 duration-300
          ${selectedMenu === MenuOptions.reviews && "opacity-100"}
        `}
      >
        {selectedMenu === MenuOptions.reviews && ReviewsContent(product)}
      </div>
    </div>
  );
}
