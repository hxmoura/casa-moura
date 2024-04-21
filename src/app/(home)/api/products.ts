import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../db/firebase";
import { product } from "../types/product";

export default async function getProducts(): Promise<product[]> {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  const products = productSnapshot.docs.map((doc) => {
    const data = doc.data() as product;
    return data;
  });

  return products;
}
