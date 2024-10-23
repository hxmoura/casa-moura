import { getAuth } from "firebase/auth";
import firestore from "../db/firestore";

export async function getUserStore(id: string) {
  const user = await firestore.getById("users", id);
  return user;
}

export function getUser() {
  const auth = getAuth();
  const user = auth.currentUser;
  return user;
}

export async function addOrder(id: string, data: any) {
  const order = await firestore.updateDocument("users", id, data);
  return order;
}
