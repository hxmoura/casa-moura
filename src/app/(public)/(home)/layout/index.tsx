import Slides from "./Slides";
import Informations from "./Informations";
import Departament from "./Departaments";
import Promotions from "./Promotions";
import Highlights from "./Highlights";
import Blog from "./Blog";
import Brands from "./Brands";
import Coupons from "./Coupons";
import SeeToo from "./SeeToo";
import getDepartaments from "@/api/queries/departaments";
import getBrands from "@/api/queries/brands";
import { getProducts } from "@/api/queries/products";
import getBlog from "@/api/queries/blog";

export default async function Content() {
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
    getProducts("sectionHomePage", "SeeToo", "=="),
    getProducts("sectionHomePage", "highlight", "=="),
    getProducts("sectionHomePage", "promotion", "=="),
  ]);

  return (
    <main>
      <Slides />
      <Informations />
      <Departament departaments={departaments.data} />
      <Promotions products={promotionProducts.data} />
      <Highlights products={highlightProducts.data} />
      <Blog blog={blog.data} />
      <Brands brands={brands.data} />
      <Coupons />
      <SeeToo products={seeTooProducts.data} />
    </main>
  );
}
