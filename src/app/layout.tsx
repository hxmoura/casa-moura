import { Inter } from "next/font/google";
import "@/styles/globals.css";
import App from "./App";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Moura - Materiais elétricos, hidráulicos e miudezas em geral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </App>
  );
}
