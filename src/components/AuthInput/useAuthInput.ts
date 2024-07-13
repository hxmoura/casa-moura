import { useState } from "react";

interface Error {
  input: string;
  message: string;
}

export default function useAuthInput() {
  const [errors, setErrors] = useState<Error[]>([]);

  function addError({ input, message }: Error) {
    const existingIndex = errors.findIndex((error) => error.input === input);

    if (existingIndex !== -1) {
      const updatedErrors = [...errors];
      updatedErrors[existingIndex] = { input, message };
      setErrors(updatedErrors);
    } else {
      setErrors((prev) => [...prev, { input, message }]);
    }
  }

  function removeError(input: string) {
    setErrors((prev) => prev.filter((error) => error.input !== input));
  }

  function validateName(value: string) {
    if (!value) {
      addError({ input: "name", message: `O nome é obrigatório!` });
    } else {
      removeError("name");
    }
  }

  function validateLastName(value: string) {
    if (!value) {
      addError({
        input: "lastname",
        message: `O sobrenome é obrigatório!`,
      });
    } else {
      removeError("lastname");
    }
  }

  function validateEmail(value: string) {
    const validateEmailRegEx =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (!value) {
      addError({
        input: "email",
        message: `O e-mail é obrigatório!`,
      });
    } else if (!validateEmailRegEx.test(value)) {
      addError({
        input: "email",
        message: `O e-mail é inválido!`,
      });
    } else {
      removeError("email");
    }
  }

  function validatePassword(value: string) {
    if (!value) {
      addError({
        input: "password",
        message: `A senha é obrigatória!`,
      });
    } else if (value.length < 6 || value.length > 24) {
      addError({
        input: "password",
        message: `A senha deve ter entre 6 e 24 caracteres!`,
      });
    } else {
      removeError("password");
    }
  }

  function validateConfirmPassword(value: string, value2: string) {
    if (!value) {
      addError({
        input: "confirmPassword",
        message: `A confirmação da senha é obrigatória!`,
      });
    } else if (value !== value2) {
      addError({
        input: "confirmPassword",
        message: "As senhas não são iguais!",
      });
    } else {
      removeError("confirmPassword");
    }
  }

  return {
    addError,
    removeError,
    errors,
    validateName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
  };
}
