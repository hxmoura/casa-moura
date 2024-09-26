"use client";

import { CartContext } from "@/contexts/CartContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import Button from "../Button";

export default function EmptyCart() {
  const { handleCartOpening } = useContext(CartContext)!;

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Icon
        icon="mdi:cart-remove"
        className="w-20 h-20 text-background-softLight"
      />
      <strong className="font-semibold text-xl text-center mt-5 mb-3">
        Seu carrinho está vazio!
      </strong>
      <p className="text-text-light text-center max-w-72">
        Adicione produtos para prosseguir para a próxima etapa.
      </p>

      <div className="mt-5 w-[200px]">
        <Button href="/" onClick={handleCartOpening}>
          Ir as compras
        </Button>
      </div>
    </div>
  );
}
