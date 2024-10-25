import { Order } from "@/types/user";
import firestore from "../db/firestore";
import { arrayUnion } from "firebase/firestore";

export async function getUserData(id: string) {
  return await firestore.getById("users", id);
}

export async function createUserData(id: string, data: any) {
  return await firestore.create("users", id, data);
}

export async function createOrder(id: string, data: Order) {
  return await firestore.update("users", id, {
    orders: arrayUnion(data),
  });
}
