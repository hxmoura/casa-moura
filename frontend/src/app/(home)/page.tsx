import { Metadata } from "next";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import getDepartaments from "./api/departaments";
import getProducts from "./api/products";
import getBlog from "./api/blog";
import getBrands from "./api/brands";

export const metadata: Metadata = {
  title: "Casa Moura - Materiais elétricos, hidráulicos e miudezas em geral",
};

export const revalidate = 3600;

export default async function Home() {
  const [departaments, products, blog, brands] = await Promise.all([
    getDepartaments(),
    getProducts(),
    getBlog(),
    getBrands(),
  ]);

  return (
    <>
      <Header departaments={departaments} />
      <Content
        departaments={departaments}
        products={products}
        blog={blog}
        brands={brands}
      />
      <Footer />
    </>
  );
}
