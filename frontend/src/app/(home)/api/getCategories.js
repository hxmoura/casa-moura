export default async function getProducts() {
  const resp = await fetch('http://localhost:3001/departaments', {
    next: { revalidate: 3600 },
  });
  return resp.json();
}
