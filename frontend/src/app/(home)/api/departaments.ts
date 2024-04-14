export default async function getDepartaments() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/departaments`,
  );
  return response.json();
}
