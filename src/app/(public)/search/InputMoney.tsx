import { currencyIntoNumberConverter } from "@/utils/CurrencyConverter";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputMoneyProps {
  inputValue: string;
  setErrorPriceMessage: Dispatch<SetStateAction<string>>;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export default function InputMoney({
  inputValue,
  setErrorPriceMessage,
  setInputValue,
}: InputMoneyProps) {
  function handlePrice(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    let numberValue = currencyIntoNumberConverter(value);

    if (!value) {
      setErrorPriceMessage("Todos os campos são obrigatórios!");
    } else if (numberValue <= 0) {
      setErrorPriceMessage("O valor deve ser maior que 0");
    } else {
      setErrorPriceMessage("");
    }

    setInputValue(value ? `R$ ${value}` : "");
  }

  return (
    <input
      value={inputValue}
      onChange={handlePrice}
      type="text"
      className="w-1/2 h-8 rounded-lg border border-background-softLight outline-none px-2 text-sm focus:border-text-light"
    />
  );
}
