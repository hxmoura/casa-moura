"use client";

import Container from "@/components/Container";
import Checkbox from "@/components/Checkbox";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import InputText from "@/components/InputText";
import useInputValidate from "@/hooks/useInputValidate";
import { useUser } from "@/contexts/UserContext";
import fetcher from "@/utils/fetcher";
import { toast } from "react-toastify";
import PasswordLevel from "../../../components/PasswordLevel";

export default function Register() {
  const { handleRegister } = useUser();

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
    isCpf,
  } = useInputValidate();

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    validate(name, "name", [{ test: isRequired }]);
    validate(lastName, "lastName", [{ test: isRequired }]);
    validate(cpf, "cpf", [
      { test: isRequired, priority: 1 },
      { test: isCpf, priority: 2 },
    ]);
    validate(email, "email", [
      { test: isRequired, priority: 1 },
      { test: isEmail, priority: 2 },
    ]);
    validate(password, "password", [
      { test: isRequired, priority: 1 },
      { test: minLength(6), priority: 2 },
      { test: maxLength(24), priority: 3 },
    ]);
    validate(confirmPassword, "confirmPassword", [
      { test: isRequired, priority: 1 },
      { test: comparePasswords(password), priority: 2 },
    ]);

    if (
      name.trim() &&
      lastName.trim() &&
      cpf.trim() &&
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

        const cpfNumber = cpf.replace(/\D/g, "");

        const cpfSecure = await fetcher("/api/crypto/encrypt", {
          method: "POST",
          body: JSON.stringify({ text: cpfNumber }),
        });

        await handleRegister(email, password, {
          name,
          lastName,
          cpf: cpfSecure.encrypted,
        });
        toast.success("Sua conta foi criada com sucesso!");
        router.push("/login");
      } catch (err: any) {
        if (err.code === "auth/email-already-in-use") {
          validate("", "email", [
            { test: "Já existe uma conta com este e-mail" },
          ]);
        } else {
          toast.error("Ocorreu um erro ao criar sua conta, tente novamente!");
        }
      } finally {
        setSendingForm(false);
      }
    }
  }

  function handleName(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setName(value);

    validate(value, name, [{ test: isRequired }]);
  }

  function handleLastName(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setLastName(value);

    validate(value, name, [{ test: isRequired }]);
  }

  function handleCPF(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;

    let maskedCPF = value;

    maskedCPF = value.replace(/\D/g, "");

    if (value.length > 3) {
      maskedCPF = value.replace(/(\d{3})(\d)/, "$1.$2");
    }
    if (value.length > 7) {
      maskedCPF = value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    }
    if (value.length > 11) {
      maskedCPF = value.replace(
        /(\d{3})\.(\d{3})\.(\d{3})(\d{2})/,
        "$1.$2.$3-$4",
      );
    }

    setCpf(maskedCPF);

    validate(maskedCPF, name, [
      { test: isRequired, priority: 1 },
      { test: isCpf, priority: 2 },
    ]);
  }

  function handleEmail(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setEmail(value);

    validate(value, name, [
      { test: isRequired, priority: 1 },
      { test: isEmail, priority: 2 },
    ]);
  }

  function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setPassword(value);

    validate(value, name, [
      { test: isRequired, priority: 1 },
      { test: minLength(6), priority: 2 },
      { test: maxLength(24), priority: 2 },
    ]);
  }

  function handleConfirmPassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setConfirmPassword(value);

    validate(value, name, [
      { test: isRequired, priority: 1 },
      { test: comparePasswords(password), priority: 2 },
    ]);
  }

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
                  label="CPF"
                  name="cpf"
                  value={cpf}
                  onChange={handleCPF}
                  error={errors.cpf}
                />
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
              <PasswordLevel password={password} />
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
                  !cpf.trim() ||
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
