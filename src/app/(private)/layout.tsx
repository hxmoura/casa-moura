"use client";

import { useUser } from "@/contexts/UserContext";
import { auth } from "@/db/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const authValidate = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => authValidate();
  }, [router]);

  return user && children;
}
