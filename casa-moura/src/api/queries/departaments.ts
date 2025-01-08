import firestore from "../db/firestore";

export default async function getDepartaments() {
  const departaments = await firestore.getAll("departaments");

  return departaments;
}
