"use client";

import CartProvider from "@/contexts/CartContext";
import { ReactNode } from "react";

export default function App({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
