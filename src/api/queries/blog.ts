import firestore from "../db/firestore";

export default async function getBlog() {
  const blog = await firestore.getAll("blog");
  return blog;
}
