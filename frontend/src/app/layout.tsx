"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </CartProvider>
  );
}
