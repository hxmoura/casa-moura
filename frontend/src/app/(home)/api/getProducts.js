export default async function getProducts() {
  const resp = await fetch('http://localhost:3001/products', {
    next: { revalidate: 3600 },
  });
  return resp.json();
}
