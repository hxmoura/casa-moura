import pageTitle from "../../utils/pageTitle";
import Header from "@/components/HeaderMaster";
import Footer from "@/components/Footer";
import Content from "./Content";

export async function generateMetadata({ searchParams }: any) {
  return {
    title: `${searchParams.q} | ${pageTitle}`,
  };
}

export default function Search() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
