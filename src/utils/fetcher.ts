export default async function fetcher(
  url: string,
  options?: { [key: string]: any },
) {
  const fetcher = await fetch(url, options);
  const data = await fetcher.json();
  return data;
}
