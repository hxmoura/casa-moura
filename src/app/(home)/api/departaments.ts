import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../db/firebase";
import { departament } from "../types/departament";

export default async function getDepartaments(): Promise<departament[]> {
  const departamentsCollection = collection(db, "departaments");
  const departamentSnapshot = await getDocs(departamentsCollection);
  const departaments = departamentSnapshot.docs.map((doc) => {
    const data = doc.data() as departament;
    return data;
  });

  return departaments;
}
