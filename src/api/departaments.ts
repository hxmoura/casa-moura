import { Departament } from "@/types/departament";
import firestore from "./fetchers/firestore";

export default async function getDepartaments(): Promise<Departament[]> {
  const departaments = (await firestore.getAll(
    "departaments",
  )) as unknown as Departament[];

  return departaments;
}
