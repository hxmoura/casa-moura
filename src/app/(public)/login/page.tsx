"use client";

import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/db/firebase";
import { useRouter } from "next/navigation";
import useAuthInput from "@/components/AuthInput/useAuthInput";
import Header from "@/components/Header";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [sendingForm, setSendingForm] = useState<boolean>(false);
  const { validateEmail, validatePassword, errors } = useAuthInput();

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (email.trim() && password.trim() && !sendingForm && !errors.length) {
      try {
        setSendingForm(true);
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/user");
      } catch (e) {
        console.log("Não foi possível fazer o login, tente novamente!");
      } finally {
        setSendingForm(false);
      }
    }
  }

  function handleEmail(evt: ChangeEvent<HTMLInputElement>) {
    const inputValue = evt.target.value;
    setEmail(inputValue);

    validateEmail(inputValue);
  }

  function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
    const inputValue = evt.target.value;
    setPassword(inputValue);

    validatePassword(inputValue);
  }

  return (
    <>
      <Header type="short" />
      <main className="my-20">
        <Container>
          <div className="flex flex-col items-center">
            <h6 className="text-3xl font-semibold text-center">Login</h6>
            <p className="font-medium text-text-light text-center mt-3">
              Seja bem-vindo(a) de volta!
            </p>
            <form
              className="border border-background-softLight rounded p-7 max-w-[480px] mt-7 mb-10 w-full"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <AuthInput
                  label="E-mail"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  error={errors.find((err) => err.input === "email")?.message}
                />
                <AuthInput
                  label="Senha"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  error={
                    errors.find((err) => err.input === "password")?.message
                  }
                  eyePassword
                />
              </div>
              <div className="flex justify-end mb-7">
                <Link href="#" className="mt-3 text-text-light text-xs">
                  Esqueci minha senha
                </Link>
              </div>
              <Button
                loading={sendingForm}
                disabled={
                  !email.trim() ||
                  !password.trim() ||
                  sendingForm ||
                  !!errors.length
                }
              >
                Fazer login
              </Button>
              <p className="text-center mt-5 text-sm">
                Não tem conta?{" "}
                <Link href="/register" className="font-medium">
                  Crie uma aqui
                </Link>
              </p>
            </form>
            <p className="text-text-light text-xs text-center max-w-[480px] w-full">
              Seus dados estão protegidos de acordo com nossa{" "}
              <Link href="#" className="font-medium">
                política de privacidade
              </Link>{" "}
              e{" "}
              <Link href="#" className="font-medium">
                termos e condições
              </Link>
              . Todos os direitos reservados - Casa Moura.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
