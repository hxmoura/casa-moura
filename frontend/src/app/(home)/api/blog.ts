export default async function getBlog() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`);
  return response.json();
}
