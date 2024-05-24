import { getProduct } from "@/api/products";
import ProductDetails from "./layout/ProductDetails";
import { Product } from "@/types/product";
import HeaderMaster from "@/components/HeaderMaster";
import Footer from "@/components/Footer";
import Recommendations from "./layout/Recommendations";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const product = (await getProduct(params.id)) as Product;

  if (!product) return;

  return {
    title: product.name,
  };
}

export default async function Page({ params }: Props) {
  const product = (await getProduct(params.id)) as Product;

  return (
    <>
      <HeaderMaster />
      <ProductDetails product={product} />
      <Recommendations />
      <Footer />
    </>
  );
}
