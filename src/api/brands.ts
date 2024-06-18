import firestore from "./fetchers/firestore";

export default async function getBrands() {
  const brands = await firestore.getAll("brands");
  return brands;
}
