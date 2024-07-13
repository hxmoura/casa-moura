"use client";

import CartProvider from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";
import { ReactNode } from "react";

export default function App({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
}
