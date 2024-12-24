import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User as UserStore,
} from "firebase/auth";
import { auth } from "@/db/firebase";
import { useRouter } from "next/navigation";
import { UserData } from "@/types/user";
import { createUserData, getUserData } from "@/api/queries/user";

export type User = UserStore & {
  data: UserData;
};

interface UserProviderValue {
  user: User | null;
  handleLogout: () => Promise<void>;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleRegister: (
    email: string,
    password: string,
    data?: any,
  ) => Promise<void>;
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
      if (user) {
        const dataUser = await getUserData(user.uid);
        setUser({ ...user, data: dataUser.data });
      }
    });

    return () => dbUser();
  }, [router]);

  async function handleLogout() {
    await auth.signOut();
    router.push("/login");
  }

  async function handleLogin(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function handleRegister(
    email: string,
    password: string,
    data: any = {},
  ) {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await createUserData(user.uid, data);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogout,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
