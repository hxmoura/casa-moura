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
      <div className="border-b border-background-softLight flex">
        <button
          onClick={() => setSelectedMenu(MenuOptions.informations)}
          className={`font-medium text-lg w-1/2 flex justify-center pb-5 border-b-[3px] ${selectedMenu === MenuOptions.informations ? "border-brand-secondary" : "border-transparent"}`}
        >
          {MenuOptions.informations}
        </button>
        <button
          onClick={() => setSelectedMenu(MenuOptions.reviews)}
          className={`font-medium text-lg w-1/2 flex justify-center pb-5 border-b-[3px] ${selectedMenu === MenuOptions.reviews ? "border-brand-secondary" : "border-transparent"}`}
        >
          {MenuOptions.reviews}
        </button>
      </div>
      {selectedMenu === MenuOptions.informations &&
        InformationsContent(product)}
      {selectedMenu === MenuOptions.reviews && ReviewsContent(product)}
    </div>
  );
}
