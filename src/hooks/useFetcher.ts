import { useEffect, useState } from "react";

export default function useFetcher<T>(fn: (...args: any[]) => Promise<T>): {
  data: T | null;
} {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function getData(...args: any[]) {
      const d = await fn(...args);
      setData(d);
    }

    getData();
  }, [fn]);

  return { data };
}
