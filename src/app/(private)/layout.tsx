"use client";

import { useUser } from "@/contexts/UserContext";
import { auth } from "@/db/firebase";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authValidate = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace(`/login?redirect=${pathname}`);
      }
    });

    return () => authValidate();
  }, [router, pathname]);

  return user && children;
}
