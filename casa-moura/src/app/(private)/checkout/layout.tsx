import pageTitle from "@/utils/pageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Finalize seu pedido | ${pageTitle}`,
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
