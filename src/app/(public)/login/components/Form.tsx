import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useUser } from "@/contexts/UserContext";
import useInputValidate from "@/hooks/useInputValidate";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
  const router = useRouter();
  const { handleLogin } = useUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const searchParams = useSearchParams();

  const [sendingForm, setSendingForm] = useState<boolean>(false);
  const { validate, errors, isEmail, isRequired, isEmptyErrors } =
    useInputValidate();

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    validate("email", email, [isEmail, isRequired]);
    validate("password", password, [isRequired]);

    if (email.trim() && password.trim() && !sendingForm && isEmptyErrors) {
      try {
        setSendingForm(true);
        await handleLogin(email, password);

        return router.push(searchParams.get("redirect") || "/user");
      } catch (e) {
        console.log("Não foi possível fazer o login, tente novamente!");
      } finally {
        setSendingForm(false);
      }
    }
  }

  function handleEmail(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setEmail(value);

    validate(name, value, [isEmail, isRequired]);
  }

  function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setPassword(value);

    validate(name, value, [isRequired]);
  }

  return (
    <form
      className="border border-background-softLight rounded p-7 max-w-[480px] mt-7 mb-10 w-full"
      onSubmit={handleSubmit}
    >
      <div className="space-y-5">
        <InputText
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={handleEmail}
          error={errors.email}
        />
        <InputText
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
          error={errors.password}
          eyePassword
        />
      </div>
      <div className="flex justify-end mb-7">
        <Link href="#" className="mt-3 text-text-light text-xs hover:underline">
          Esqueci minha senha
        </Link>
      </div>
      <Button
        type="submit"
        loading={sendingForm}
        disabled={
          !email.trim() || !password.trim() || sendingForm || !isEmptyErrors
        }
      >
        Fazer login
      </Button>

      <div className="text-center mt-5">
        <Link href="/register" className="font-medium text-sm hover:underline">
          Não tem conta? Crie uma aqui
        </Link>
      </div>
    </form>
  );
}
