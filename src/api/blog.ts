import firestore from "./fetchers/firestore";

export default async function getBrands() {
  const blog = await firestore.getAll("blog");
  return blog;
}
