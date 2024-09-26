import firestore from "../db/firestore";

export async function getUser(id: string) {
  const user = await firestore.getById("users", id);
  return user;
}
