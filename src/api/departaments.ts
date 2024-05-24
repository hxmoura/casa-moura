import { db } from "@/db/firebase";
import { Departament } from "@/types/departament";
import { collection, getDocs } from "firebase/firestore";

export default async function getDepartaments(): Promise<Departament[]> {
  const departamentsCollection = collection(db, "departaments");
  const departamentSnapshot = await getDocs(departamentsCollection);
  const departaments = departamentSnapshot.docs.map((doc) => {
    const data = doc.data() as Departament;
    return data;
  });

  return departaments;
}
