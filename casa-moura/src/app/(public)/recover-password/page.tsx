"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import InputText from "@/components/InputText";
import PasswordLevel from "@/components/PasswordLevel";
import { useUser } from "@/contexts/UserContext";
import useInputValidate from "@/hooks/useInputValidate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function RecoverPassword({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const router = useRouter();
  const { updatePassword } = useUser();
  const token = searchParams.oobCode;

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const {
    validate,
    maxLength,
    minLength,
    isRequired,
    comparePasswords,
    errors,
    isEmptyErrors,
  } = useInputValidate();

  function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setPassword(value);

    validate(value, name, [
      { test: isRequired, priority: 1 },
      { test: minLength(6), priority: 2 },
      { test: maxLength(24), priority: 2 },
    ]);
  }

  function handleRepeatPassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setRepeatPassword(value);

    validate(value, name, [
      { test: isRequired, priority: 1 },
      { test: comparePasswords(password), priority: 2 },
    ]);
  }

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    try {
      validate(password, "password", [
        { test: isRequired, priority: 1 },
        { test: minLength(6), priority: 2 },
        { test: maxLength(24), priority: 2 },
      ]);

      validate(repeatPassword, "repeatPassword", [
        { test: isRequired, priority: 1 },
        { test: comparePasswords(password), priority: 2 },
      ]);

      if (isEmptyErrors && password === repeatPassword) {
        setLoadingSubmit(true);
        await updatePassword(token, password);
        router.replace("/login");
        toast.success("Sua senha foi alterada com sucesso!");
      }
    } catch (err) {
      toast.error("Não foi possível alterar a senha, tente novamente!");
    } finally {
      setLoadingSubmit(false);
    }
  }

  if (!token) {
    return router.replace("/");
  }

  return (
    <>
      <Header type="short" />
      <main className="my-20">
        <Container>
          <div className="flex flex-col items-center">
            <h6 className="text-3xl font-semibold text-center">
              Recuperar senha
            </h6>

            <form
              className="border border-background-softLight rounded p-7 max-w-[480px] mt-7 mb-10 w-full"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5 mb-7">
                <InputText
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  eyePassword
                  label="Nova senha"
                  error={errors.password}
                />
                <InputText
                  type="password"
                  name="repeatPassword"
                  value={repeatPassword}
                  onChange={handleRepeatPassword}
                  eyePassword
                  label="Repetir nova senha"
                  error={errors.repeatPassword}
                />
              </div>
              <PasswordLevel password={password} />
              <Button
                type="submit"
                disabled={
                  !password ||
                  !repeatPassword ||
                  !isEmptyErrors ||
                  loadingSubmit
                }
                loading={loadingSubmit}
              >
                Salvar
              </Button>
            </form>

            <p className="text-text-light text-xs text-center max-w-[480px] w-full">
              Seus dados estão protegidos de acordo com nossa{" "}
              <Link href="#" className="font-medium hover:underline">
                política de privacidade
              </Link>{" "}
              e{" "}
              <Link href="#" className="font-medium hover:underline">
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
