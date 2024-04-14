export default async function getBrands() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brands`);
  return response.json();
}
