import { ResponseType } from "@/api/types/Response";
import { useState, useEffect } from "react";

export default function useFetcher<T>(fn: () => Promise<ResponseType<T>>) {
  const [response, setResponse] = useState<ResponseType<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetcherData() {
      try {
        setLoading(true);
        const res = await fn();
        setResponse(res);
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    }

    fetcherData();
  }, [fn]);

  return { response, loading, error };
}
