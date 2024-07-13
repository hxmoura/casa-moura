import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function useQueryParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const router = useRouter();

  function deleteByKey(key: string) {
    params.delete(key);
    updateUrl();
  }

  function deleteByValue(key: string, value: string) {
    const allValues = params.getAll(key);
    const filterValues = allValues.filter((v) => v !== value);

    params.delete(key);

    filterValues.forEach((v) => params.append(key, v));
    updateUrl();
  }

  function addQuery(key: string, value: string) {
    params.append(key, value);
    updateUrl();
  }

  function updateQuery(key: string, value: any) {
    params.set(key, value);
    updateUrl();
  }

  function updateUrl(param?: string) {
    return router.replace(`${pathname}?${param || params}`, { scroll: false });
  }

  return { deleteByKey, deleteByValue, addQuery, updateQuery, updateUrl };
}
