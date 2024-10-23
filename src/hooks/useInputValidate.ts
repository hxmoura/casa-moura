import { useState } from "react";

type ErrorMessage = { [key: string]: string };
type ValidateFunction = (...args: any[]) => string | null;

export default function useInputValidate() {
  const [errors, setErrors] = useState<ErrorMessage>({});

  const isEmptyErrors = Object.keys(errors).length === 0;

  function validate(
    inputName: string,
    value: string,
    validations: ValidateFunction[],
  ) {
    let newErrors: ErrorMessage = {};

    validations.forEach((validation) => {
      const error = validation(value);

      if (error) {
        newErrors[inputName] = error;
      }
    });

    setErrors((prevErrors) => {
      if (Object.keys(newErrors).length === 0) {
        const { [inputName]: _, ...rest } = prevErrors;
        return rest;
      }

      return {
        ...prevErrors,
        ...newErrors,
      };
    });
  }

  function isRequired(value: string) {
    return value ? null : "O campo é obrigatório";
  }

  function minLength(value: string, length: number) {
    return value.length > 0 && value.length < length
      ? `O limite minimo é de ${length} caracteres`
      : null;
  }

  function maxLength(value: string, length: number) {
    return length >= value.length
      ? null
      : `O limite máximo é de ${length} caracteres`;
  }

  function isEmail(value: string) {
    const validateEmailRegEx =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return validateEmailRegEx.test(value) ? null : "O e-mail é inválido";
  }

  function onlyNumber(value: string) {
    return /\D/g.test(value)
      ? "O valor informado deve ser apenas números"
      : null;
  }

  function comparePasswords(password: string, confirmPassword: string) {
    return password !== confirmPassword ? "As senhas não são iguais" : null;
  }

  return {
    errors,
    isEmptyErrors,
    validate,
    isRequired,
    minLength,
    maxLength,
    isEmail,
    onlyNumber,
    comparePasswords,
  };
}
