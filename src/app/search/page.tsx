"use client";

import { Suspense } from "react";
import Query from "./Query";

export default function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Query />
    </Suspense>
  );
}
