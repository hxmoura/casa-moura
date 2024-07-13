import Header from "@/components/HeaderMaster";
import Footer from "@/components/Footer";
import Content from "./Content";
import pageTitle from "@/utils/pageTitle";

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
