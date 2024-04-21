import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../db/firebase";
import { brand } from "../types/brand";

export default async function getBrands(): Promise<brand[]> {
  const brandsCollection = collection(db, "brands");
  const brandSnapshot = await getDocs(brandsCollection);
  const brands = brandSnapshot.docs.map((doc) => {
    const data = doc.data() as brand;
    return data;
  });

  return brands;
}
