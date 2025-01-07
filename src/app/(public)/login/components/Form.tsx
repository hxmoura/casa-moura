import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import { useUser } from "@/contexts/UserContext";
import useInputValidate from "@/hooks/useInputValidate";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const router = useRouter();
  const { handleLogin, sendEmailRecoverPassword } = useUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const searchParams = useSearchParams();

  const [sendingForm, setSendingForm] = useState<boolean>(false);
  const { validate, errors, isEmail, isRequired, isEmptyErrors } =
    useInputValidate();

  const [openPasswordRecoveryModal, setOpenPasswordRecoveryModal] =
    useState(false);
  const [emailRecoverPassword, setEmailRecoverPassword] = useState("");
  const [loadingRecoverPassword, setLoadingRecoverPassword] = useState(false);

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    validate(email, "email", [
      { test: isRequired, priority: 1 },
      { test: isEmail, priority: 2 },
    ]);
    validate(password, "password", [{ test: isRequired }]);

    if (email.trim() && password.trim() && !sendingForm && isEmptyErrors) {
      try {
        setSendingForm(true);
        await handleLogin(email, password);

        return router.push(searchParams.get("redirect") || "/user");
      } catch (e) {
        toast.error("Não foi possível fazer o login, tente novamente!");
      } finally {
        setSendingForm(false);
      }
    }
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

    validate(value, name, [{ test: isRequired }]);
  }

  function handleEmailRecoverPassword(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setEmailRecoverPassword(value);

    validate(value, name, [
      { test: isRequired, priority: 1 },
      { test: isEmail, priority: 2 },
    ]);
  }

  async function handleSubmitRecoverPassword() {
    try {
      setLoadingRecoverPassword(true);
      await sendEmailRecoverPassword(emailRecoverPassword);
      setEmailRecoverPassword("");
      setOpenPasswordRecoveryModal(false);
      toast.success(
        `O e-email de recuperação da senha foi enviado para ${emailRecoverPassword}.`,
      );
    } catch (err) {
      toast.error("Não foi possível enviar o e-mail, tente novamente!");
    } finally {
      setLoadingRecoverPassword(false);
    }
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
        <Link
          href="#"
          onClick={() => setOpenPasswordRecoveryModal(true)}
          className="mt-3 text-text-light text-xs hover:underline"
        >
          Esqueci minha senha
        </Link>
        <Modal
          openModal={openPasswordRecoveryModal}
          setOpenModal={setOpenPasswordRecoveryModal}
          position="center"
          className="max-w-[480px] w-full rounded overflow-hidden"
        >
          <ModalHeader
            label="Esqueci minha senha"
            onClose={() => setOpenPasswordRecoveryModal(false)}
          />
          <div className="p-5 space-y-3">
            <p className="text-sm">
              Informe o e-mail para receber as instruções e o link para criar
              sua nova senha:
            </p>
            <InputText
              name="emailRecoverPassword"
              type="email"
              value={emailRecoverPassword}
              onChange={handleEmailRecoverPassword}
              error={errors.emailRecoverPassword}
              placeholder="email@email.com"
            />
            <Button
              disabled={
                !emailRecoverPassword.trim() ||
                !!errors.emailRecoverPassword ||
                loadingRecoverPassword
              }
              onClick={handleSubmitRecoverPassword}
              loading={loadingRecoverPassword}
            >
              Enviar e-mail
            </Button>
          </div>
        </Modal>
      </div>
      <Button
        type="submit"
        loading={sendingForm}
        disabled={
          !email.trim() ||
          !password.trim() ||
          sendingForm ||
          !!errors.email ||
          !!errors.password
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
