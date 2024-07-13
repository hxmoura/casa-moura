import firestore from "./fetchers/firestore";
import { User } from "@/types/user";

export async function getUser(id: string): Promise<User> {
  const user = (await firestore.getById("users", id)) as User;
  return user;
}
