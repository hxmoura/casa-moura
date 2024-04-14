export default async function getProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
  );
  return response.json();
}
