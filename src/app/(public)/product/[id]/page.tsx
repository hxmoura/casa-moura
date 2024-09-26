import { getProduct } from "@/api/queries/products";
import ProductDetails from "./layout/ProductDetails";
import Footer from "@/components/Footer";
import Recommendations from "./layout/Recommendations";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.id);

  if (!product.isSuccess) return;

  return {
    title: product.data.name,
  };
}

export default async function Page({ params }: Props) {
  const product = await getProduct(params.id);

  if (!product.isSuccess) {
    return redirect("/not-found");
  }

  return (
    <>
      <Header />
      <ProductDetails product={product.data} />
      <Recommendations />
      <Footer />
    </>
  );
}
