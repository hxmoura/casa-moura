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

export default function Content() {
  return (
    <main>
      <Slides />
      <Informations />
      <Departament />
      <Promotions />
      <Highlights />
      <Blog />
      <Brands />
      <Coupons />
      <SeeToo />
      <Newsletter />
    </main>
  );
}
