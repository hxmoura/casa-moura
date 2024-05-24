import { db } from "@/db/firebase";
import { Blog } from "@/types/blog";
import { collection, getDocs } from "firebase/firestore";

export default async function getBrands(): Promise<Blog[]> {
  const blogCollection = collection(db, "blog");
  const blogSnapshot = await getDocs(blogCollection);
  const blog = blogSnapshot.docs.map((doc) => {
    const data = doc.data() as Blog;
    return data;
  });

  return blog;
}
