import Slides from "./Slides";
import Informations from "./Informations";
import Departament from "./Departaments";
import Promotions from "./Promotions";
import Highlights from "./Highlights";
import Blog from "./Blog";
import Brands from "./Brands";
import Coupons from "./Coupons";
import SeeToo from "./SeeToo";
import { Departament as DepartamentType } from "@/types/departament";
import { Product } from "@/types/product";
import { Blog as BlogType } from "@/types/blog";
import { Brand } from "@/types/brand";

interface ContentProps {
  departaments: DepartamentType[];
  blog: BlogType[];
  brands: Brand[];
  seeTooProducts: Product[];
  highlightProducts: Product[];
  promotionProducts: Product[];
}

export default function Content({
  departaments,
  blog,
  brands,
  seeTooProducts,
  highlightProducts,
  promotionProducts,
}: ContentProps) {
  return (
    <main>
      <Slides />
      <Informations />
      <Departament departaments={departaments} />
      <Promotions products={promotionProducts} />
      <Highlights products={highlightProducts} />
      <Blog blog={blog} />
      <Brands brands={brands} />
      <Coupons />
      <SeeToo products={seeTooProducts} />
    </main>
  );
}
