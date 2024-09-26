import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase";
import { useRouter } from "next/navigation";
import { getUser } from "@/api/queries/user";
import { User } from "@/types/user";

interface UserProviderValue {
  user: User | null;
  handleLogout: () => Promise<void>;
}

export const UserContext = createContext<UserProviderValue>(null as any);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const dbUser = onAuthStateChanged(auth, async (user) => {
      if (user && user.email) {
        const { data } = await getUser(user.uid);
        setUser({ ...data, email: user.email });
      }
    });

    return () => dbUser();
  }, [router]);

  async function handleLogout() {
    await auth.signOut();
    router.push("/login");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
