import { ResponseType } from "@/api/types/Response";
import { useState, useEffect } from "react";

export default function useFetcher<T>(fn: () => Promise<ResponseType<T>>) {
  const [response, setResponse] = useState<ResponseType<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callFn = async () => {
      if (typeof fn === "function") {
        const res = await fn();
        setResponse(res);
        setLoading(false);
      }
    };

    callFn();

    return () => setLoading(true);
  }, [fn]);

  return { response, loading };
}
