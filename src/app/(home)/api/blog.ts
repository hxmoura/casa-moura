import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../db/firebase";
import { blog } from "../types/blog";

export default async function getBrands(): Promise<blog[]> {
  const blogCollection = collection(db, "blog");
  const blogSnapshot = await getDocs(blogCollection);
  const blog = blogSnapshot.docs.map((doc) => {
    const data = doc.data() as blog;
    return data;
  });

  return blog;
}
