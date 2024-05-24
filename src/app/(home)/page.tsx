import HeaderMaster from "@/components/HeaderMaster";
import Content from "./layout";
import Footer from "@/components/Footer";
import getDepartaments from "@/api/departaments";
import { getProductWithCondition } from "@/api/products";
import getBrands from "@/api/brands";
import getBlog from "@/api/blog";
import { Product } from "@/types/product";

export const revalidate = 3600;

export default async function Home() {
  const [
    departaments,
    blog,
    brands,
    seeTooProducts,
    highlightProducts,
    promotionProducts,
  ] = await Promise.all([
    getDepartaments(),
    getBlog(),
    getBrands(),
    getProductWithCondition({
      property: "sectionHomePage",
      value: "SeeToo",
      operator: "==",
    }),
    getProductWithCondition({
      property: "sectionHomePage",
      value: "highlight",
      operator: "==",
    }),
    getProductWithCondition({
      property: "sectionHomePage",
      value: "promotion",
      operator: "==",
    }),
  ]);

  const seeTooProductsTypes = seeTooProducts as Product[];
  const highlightProductsTypes = highlightProducts as Product[];
  const promotionProductsTypes = promotionProducts as Product[];

  return (
    <>
      <HeaderMaster />
      <Content
        departaments={departaments}
        blog={blog}
        brands={brands}
        seeTooProducts={seeTooProductsTypes}
        highlightProducts={highlightProductsTypes}
        promotionProducts={promotionProductsTypes}
      />
      <Footer />
    </>
  );
}
