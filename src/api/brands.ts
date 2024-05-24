import { db } from "@/db/firebase";
import { Brand } from "@/types/brand";
import { collection, getDocs } from "firebase/firestore";

export default async function getBrands(): Promise<Brand[]> {
  const brandsCollection = collection(db, "brands");
  const brandSnapshot = await getDocs(brandsCollection);
  const brands = brandSnapshot.docs.map((doc) => {
    const data = doc.data() as Brand;
    return data;
  });

  return brands;
}
