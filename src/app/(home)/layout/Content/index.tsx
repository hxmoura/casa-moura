import Slides from "./Slides";
import Informations from "./Informations";
import Departament from "./Departaments";
import Promotions from "./Promotions";
import Highlights from "./Highlights";
import Blog from "./Blog";
import Brands from "./Brands";
import Coupons from "./Coupons";
import SeeToo from "./SeeToo";
import Newsletter from "./Newsletter";
import { blog } from "../../types/blog";
import { product } from "../../types/product";
import { brand } from "../../types/brand";
import { departament } from "../../types/departament";

interface ContentProps {
  departaments: departament[];
  products: product[];
  blog: blog[];
  brands: brand[];
}

export default function Content({
  departaments,
  products,
  blog,
  brands,
}: ContentProps) {
  return (
    <main>
      <Slides />
      <Informations />
      <Departament departaments={departaments} />
      <Promotions products={products} />
      <Highlights products={products} />
      <Blog blog={blog} />
      <Brands brands={brands} />
      <Coupons />
      <SeeToo products={products} />
      <Newsletter />
    </main>
  );
}
