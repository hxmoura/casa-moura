import { useSearchParams } from "next/navigation";

export default function Query() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  return <h1>{search}</h1>;
}
