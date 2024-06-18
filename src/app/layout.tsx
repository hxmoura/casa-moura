import { Inter } from "next/font/google";
import "@/styles/globals.css";
import App from "./App";
import { Metadata } from "next";
import pageTitle from "../utils/pageTitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: pageTitle,
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
