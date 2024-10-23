import { db } from "@/db/firebase";
import {
  WhereFilterOp,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Response } from "../services/Response";

const firestore = {
  async getAll(col: string) {
    try {
      const dataCollection = collection(db, col);
      const dataSnapshot = await getDocs(dataCollection);
      const data = dataSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      return Response.Success(data);
    } catch {
      return Response.Failure(
        "Unable to complete the operation, please try again",
      );
    }
  },

  async getById(col: string, id: string) {
    try {
      const docRef = doc(db, col, id);
      const docSnap = await getDoc(docRef);
      const data = { ...docSnap.data(), id: docSnap.id };

      if (docSnap.exists()) {
        return Response.Success(data);
      } else {
        return Response.Failure("Data not found");
      }
    } catch {
      return Response.Failure(
        "Unable to complete the operation, please try again",
      );
    }
  },

  async getByCondition(
    col: string,
    key: string,
    value: string,
    operator: ">=" | "<=" | ">" | "<" | "==",
  ) {
    try {
      const q = query(
        collection(db, col),
        where(key, <WhereFilterOp>operator, value),
      );

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      return Response.Success(data);
    } catch {
      return Response.Failure(
        "Unable to complete the operation, please try again",
      );
    }
  },

  async updateDocument(col: string, docId: string, docData: any) {
    try {
      const data = await updateDoc(doc(db, col, docId), docData);
      return Response.Success(data);
    } catch {
      return Response.Failure(
        "Unable to complete the operation, please try again",
      );
    }
  },
};

export default firestore;
