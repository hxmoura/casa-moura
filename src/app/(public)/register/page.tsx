"use client";

import Container from "@/components/Container";
import Checkbox from "@/components/Checkbox";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import InputText from "@/components/InputText";
import useInputValidate from "@/hooks/useInputValidate";
import { useUser } from "@/contexts/UserContext";

export default function Register() {
  const { handleRegister } = useUser();

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [passwordLevel, setPasswordLevel] = useState<
    "Fraca" | "Razoável" | "Forte"
  >("Fraca");

  const [communicationCheckbox, setCommunicationCheckbox] =
    useState<boolean>(false);
  const [termsCheckbox, setTermsCheckbox] = useState<boolean>(false);

  const [sendingForm, setSendingForm] = useState<boolean>(false);

  const router = useRouter();
  const {
    errors,
    isEmptyErrors,
    validate,
    isEmail,
    isRequired,
    minLength,
    maxLength,
    comparePasswords,
  } = useInputValidate();

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    validate("name", name, [isRequired]);
    validate("lastname", name, [isRequired]);
    validate("email", email, [isEmail, isRequired]);
    validate("password", password, [
      (value) => maxLength(value, 24),
      (value) => minLength(value, 6),
      isRequired,
    ]);
    validate("confirmPassword", confirmPassword, [
      (value) => (value !== password ? "As senhas não são iguais" : null),
      isRequired,
    ]);

    if (
      name.trim() &&
      lastName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      isEmptyErrors &&
      communicationCheckbox &&
      termsCheckbox &&
      !sendingForm
    ) {
      try {
        setSendingForm(true);
        await handleRegister(email, password, { name, lastName });
        router.push("/login");
      } catch (err: any) {
        if (err.code === "auth/email-already-in-use") {
          validate("email", "", [() => "Já existe uma conta com este e-mail."]);
        } else {
          console.log("Ocorreu um erro ao criar sua conta, tente novamente!");
        }
      } finally {
        setSendingForm(false);
      }
    }
  }

  function handleName(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setName(value);

    validate(name, value, [isRequired]);
  }

  function handleLastName(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setLastName(value);

    validate(name, value, [isRequired]);
  }

  function handleEmail(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setEmail(value);

    validate(name, value, [isEmail, isRequired]);
  }

  function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setPassword(value);

    validate(name, value, [
      (value) => maxLength(value, 24),
      (value) => minLength(value, 6),
      isRequired,
    ]);
  }

  function handleConfirmPassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setConfirmPassword(value);

    validate(name, value, [
      (value) => comparePasswords(value, password),
      isRequired,
    ]);
  }

  useEffect(() => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\\/]/.test(password);

    if (password.length < 6) {
      setPasswordLevel("Fraca");
    } else if (
      password.length >= 6 &&
      hasLowerCase &&
      hasUpperCase &&
      hasNumber &&
      hasSpecialChar
    ) {
      setPasswordLevel("Forte");
    } else if (password.length >= 6 && hasLowerCase && hasUpperCase) {
      setPasswordLevel("Razoável");
    }
  }, [password]);

  return (
    <>
      <Header type="short" />
      <main className="my-20">
        <Container>
          <div className="flex flex-col items-center">
            <h6 className="text-3xl font-semibold text-center">Cadastro</h6>
            <p className="font-medium text-text-light text-center mt-3">
              Crie sua conta e aproveite as promoções!
            </p>
            <form
              className="border border-background-softLight rounded p-7 max-w-[480px] mt-7 mb-10 w-full"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <InputText
                    label="Nome"
                    name="name"
                    value={name}
                    onChange={handleName}
                    error={errors.name}
                  />
                  <InputText
                    label="Sobrenome"
                    name="lastname"
                    value={lastName}
                    onChange={handleLastName}
                    error={errors.lastname}
                  />
                </div>
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
                <InputText
                  label="Confirmar senha"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  error={errors.confirmPassword}
                  eyePassword
                />
              </div>
              <div className="mt-5 mb-10">
                <p className="text-xs font-medium mb-2">Nível da senha</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-1 w-40">
                    <div
                      className={`absolute h-full rounded transition-all
                        ${passwordLevel === "Fraca" && "bg-notify-error"}
                        ${passwordLevel === "Razoável" && "bg-notify-warning"}
                        ${passwordLevel === "Forte" && "bg-notify-success"}
                      `}
                      style={{
                        width: `${!password.length ? 0 : passwordLevel === "Fraca" ? 20 : passwordLevel === "Razoável" ? 60 : 100}%`,
                      }}
                    ></div>
                    <div className="bg-background-softLight w-full h-full rounded"></div>
                  </div>
                  <p className="text-xs">{passwordLevel}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-7">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    checked={communicationCheckbox}
                    size={16}
                    rounded={2}
                    onChange={(e) => setCommunicationCheckbox(e.target.checked)}
                  />
                  <label className="text-xs">
                    Quero receber comunicações e promoções futuras
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox
                    checked={termsCheckbox}
                    size={16}
                    rounded={2}
                    onChange={(e) => setTermsCheckbox(e.target.checked)}
                  />
                  <label className="text-xs">
                    Declaro que estou de acordo com os{" "}
                    <Link href="#" className="font-medium hover:underline">
                      Termos e condições
                    </Link>
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                disabled={
                  !name.trim() ||
                  !lastName.trim() ||
                  !email.trim() ||
                  !password.trim() ||
                  !confirmPassword.trim() ||
                  !isEmptyErrors ||
                  !communicationCheckbox ||
                  !termsCheckbox ||
                  sendingForm
                }
                loading={sendingForm}
              >
                Criar conta
              </Button>

              <div className="text-center mt-5">
                <Link
                  href="/login"
                  className="font-medium text-sm hover:underline"
                >
                  Já tem cadastro? Entre aqui
                </Link>
              </div>
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
