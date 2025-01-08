"use client";

import { useUser } from "@/contexts/UserContext";

export default function User() {
  const { user, handleLogout } = useUser();

  return (
    <>
      <h1>
        {user?.data.name} {user?.data.lastName}
      </h1>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
