import { db } from "@/db/firebase";
import { Product } from "@/types/product";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { redirect } from "next/navigation";

export async function getProducts(): Promise<Product[]> {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  const products = productSnapshot.docs.map((doc) => {
    const data = { ...doc.data(), id: doc.id };
    return data as Product;
  });

  return products;
}

export async function getProduct(id: string) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    redirect("/not-found");
  }
}

interface getProductWithConditionProps {
  property: string;
  value: string;
  operator: string;
}

export async function getProductWithCondition({
  property,
  value,
  operator,
}: getProductWithConditionProps) {
  const q = query(
    collection(db, "products"),
    where(property, <WhereFilterOp>operator, value),
  );

  const querySnapshot = await getDocs(q);

  const filteredProducts = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return filteredProducts;
}
