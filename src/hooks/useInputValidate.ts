import { useState } from "react";

type PriorityLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface Validation {
  test: string | ((value: string) => string | null);
  priority?: PriorityLevels;
}

interface Error {
  [key: string]: string;
}

export default function useInputValidate() {
  const [errors, setErrors] = useState<Error>({});

  const validate = (
    value: string,
    input: string,
    validations: Validation[],
  ) => {
    let highestPriority = null;

    for (let validation of validations) {
      let errorMessage: string | null = null;

      if (typeof validation.test === "function") {
        errorMessage = validation.test(value);
      } else if (typeof validation.test === "string") {
        errorMessage = validation.test;
      }

      if (!validation.priority) {
        validation.priority = 1;
      }

      if (
        errorMessage &&
        (!highestPriority || validation.priority < highestPriority.priority)
      ) {
        highestPriority = { test: errorMessage, priority: validation.priority };
      }
    }

    if (highestPriority) {
      setErrors((prev) => ({
        ...prev,
        [input]: highestPriority.test,
      }));
    } else {
      setErrors((prev) => {
        const { [input]: _, ...updated } = prev;
        return updated;
      });
    }
  };

  const isEmptyErrors = Object.keys(errors).length === 0;

  const isRequired = (value: string) => {
    return !value ? "O campo é obrigatório" : null;
  };

  const minLength = (min: number) => (value: string) => {
    return value.length < min
      ? `O campo deve ter no minimo ${min} caracteres`
      : null;
  };

  const maxLength = (max: number) => (value: string) => {
    return value.length > max
      ? `O campo deve ter no máximo ${max} caracteres`
      : null;
  };

  const isEmail = (value: string) => {
    const validateEmailRegEx =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return validateEmailRegEx.test(value) ? null : "O e-mail é inválido";
  };

  const onlyNumber = (value: string) => {
    return /\D/g.test(value)
      ? "O valor informado deve ser apenas números"
      : null;
  };

  const comparePasswords = (password: string) => (confirmPassword: string) => {
    return password !== confirmPassword ? "As senhas não são iguais" : null;
  };

  const isCpf = (value: string) => {
    const validateCpfRegEx = /^(?!\b(\d)\1+\b)(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

    return validateCpfRegEx.test(value) ? null : "O CPF é inválido";
  };

  return {
    validate,
    errors,
    isEmptyErrors,
    isRequired,
    minLength,
    maxLength,
    isEmail,
    onlyNumber,
    comparePasswords,
    isCpf,
  };
}
