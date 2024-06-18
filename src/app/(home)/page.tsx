import HeaderMaster from "@/components/HeaderMaster";
import Content from "./layout";
import Footer from "@/components/Footer";
import getDepartaments from "@/api/departaments";
import { getProducts } from "@/api/products";
import getBrands from "@/api/brands";
import getBlog from "@/api/blog";
import { Product } from "@/types/product";
import { Departament } from "@/types/departament";
import { Brand } from "@/types/brand";
import { Blog } from "@/types/blog";

export const revalidate = 3600;

export default async function Home() {
  const [
    departaments,
    blog,
    brands,
    seeTooProducts,
    highlightProducts,
    promotionProducts,
  ] = (await Promise.all([
    getDepartaments(),
    getBlog(),
    getBrands(),
    getProducts("sectionHomePage", "SeeToo", "=="),
    getProducts("sectionHomePage", "highlight", "=="),
    getProducts("sectionHomePage", "promotion", "=="),
  ])) as unknown as [
    Departament[],
    Blog[],
    Brand[],
    Product[],
    Product[],
    Product[],
  ];

  return (
    <>
      <HeaderMaster />
      <Content
        departaments={departaments}
        blog={blog}
        brands={brands}
        seeTooProducts={seeTooProducts}
        highlightProducts={highlightProducts}
        promotionProducts={promotionProducts}
      />
      <Footer />
    </>
  );
}
