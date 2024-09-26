import Header from "@/components/Header";
import Content from "./layout";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
