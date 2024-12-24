import firestore from "../db/firestore";

export async function getUserData(id: string) {
  return await firestore.getById("users", id);
}

export async function createUserData(id: string, data: any) {
  return await firestore.create("users", id, data);
}
