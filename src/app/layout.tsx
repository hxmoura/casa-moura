import { Inter } from "next/font/google";
import "@/styles/globals.css";
import App from "./App";
import { Metadata } from "next";
import pageTitle from "../utils/pageTitle";
import { ToastContainer } from "react-toastify";

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
        <body className={inter.className}>
          <ToastContainer
            hideProgressBar={true}
            theme="colored"
            closeOnClick
            newestOnTop={true}
          />
          {children}
        </body>
      </html>
    </App>
  );
}
