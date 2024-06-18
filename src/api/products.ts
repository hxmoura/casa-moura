import { Product } from "@/types/product";
import firestore from "./fetchers/firestore";
import { redirect } from "next/navigation";

export async function getProducts(
  key?: string,
  value?: string,
  operator?: ">=" | "<=" | ">" | "<" | "==",
): Promise<Product[]> {
  if (key && value && operator) {
    const products = (await firestore.getByCondition(
      "products",
      key,
      value,
      operator,
    )) as unknown as Product[];
    return products;
  } else {
    const products = (await firestore.getAll(
      "products",
    )) as unknown as Product[];
    return products;
  }
}

export async function getProduct(id: string) {
  const product = await firestore.getById("products", id);

  if (!product) {
    return redirect("/not-found");
  }

  return product;
}
