import { db } from "@/db/firebase";
import {
  WhereFilterOp,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firestore = {
  async getAll(col: string) {
    const dataCollection = collection(db, col);
    const dataSnapshot = await getDocs(dataCollection);
    const data = dataSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return data;
  },

  async getById(col: string, id: string) {
    const docRef = doc(db, col, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    }
  },

  async getByCondition(
    col: string,
    key: string,
    value: string,
    operator: ">=" | "<=" | ">" | "<" | "==",
  ) {
    const q = query(
      collection(db, col),
      where(key, <WhereFilterOp>operator, value),
    );

    const querySnapshot = await getDocs(q);

    const filteredProducts = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return filteredProducts;
  },
};

export default firestore;
