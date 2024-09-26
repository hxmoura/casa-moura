import firestore from "../db/firestore";

export async function getProducts(
  key?: string,
  value?: string,
  operator?: ">=" | "<=" | ">" | "<" | "==",
) {
  if (key && value && operator) {
    const products = await firestore.getByCondition(
      "products",
      key,
      value,
      operator,
    );
    return products;
  } else {
    const products = await firestore.getAll("products");
    return products;
  }
}

export async function getProduct(id: string) {
  const product = await firestore.getById("products", id);
  return product;
}
