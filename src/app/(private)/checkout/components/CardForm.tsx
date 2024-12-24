import InputText from "@/components/InputText";
import InputCard from "./InputCard";
import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  CardNumber,
  SecurityCode,
  ExpirationMonth,
  ExpirationYear,
} from "@mercadopago/sdk-react";
import InputSelect from "@/components/InputSelect";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { useCart } from "@/contexts/CartContext";
import { CardFlag, CardInformations } from "../types/payment";
import useInputValidate from "@/hooks/useInputValidate";
import {
  MPBinChangeEvent,
  MPChangeEvent,
  MPValidityChangeEvent,
} from "../types/mp";

const CardNumberMemoized = memo(CardNumber);
const SecurityCodeMemoized = memo(SecurityCode);
const ExpirationMonthMemoized = memo(ExpirationMonth);
const ExpirationYearMemoized = memo(ExpirationYear);

interface CardFormProps {
  onEmptyCardErrors: (value: boolean) => void;
  onEmptyCardInitialValue: (value: boolean) => void;
  setCardData: Dispatch<SetStateAction<CardInformations>>;
  cardData: CardInformations;
}

interface Error {
  test: string;
  priority: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

interface MapError {
  [key: string]: Error;
}

export default function CardForm({
  onEmptyCardErrors,
  onEmptyCardInitialValue,
  setCardData,
  cardData,
}: CardFormProps) {
  const { calculateCartTotal } = useCart();
  const { errors, validate, isRequired, isEmptyErrors } = useInputValidate();
  const [emptyInputInitialValue, setEmptyInputInitialValue] = useState({
    cardNumber: true,
    securityCode: true,
    expirationMonth: true,
    expirationYear: true,
  });

  useEffect(() => {
    onEmptyCardErrors(isEmptyErrors);
    onEmptyCardInitialValue(
      Object.values(emptyInputInitialValue).every((input) => input === false),
    );
  }, [
    isEmptyErrors,
    onEmptyCardErrors,
    emptyInputInitialValue,
    onEmptyCardInitialValue,
  ]);

  function handleCardName(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    setCardData((prev) => ({ ...prev, name: evt.target.value }));
    validate(value, name, [{ test: isRequired }]);
  }

  function handleCardInstallments(evt: ChangeEvent<HTMLSelectElement>) {
    setCardData((prev) => ({
      ...prev,
      installments: +evt.target.value,
    }));
  }

  function handleValidityChange(evt: MPValidityChangeEvent) {
    const { errorMessages, field } = evt;
    let errors: Error[] = [];

    const mapErrors: MapError = {
      "is empty.": { test: "O campo é obrigatório", priority: 1 },
      "should be of length between '8' and '19'.": {
        test: "O valor deve ter entre 8 e 19 caracteres",
        priority: 2,
      },
      "should be of length '3' or '4'.": {
        test: "O valor deve ter 3 ou 4 caracteres",
        priority: 2,
      },
      "should be of length '2' or '4'.": {
        test: "O valor deve ter 2 ou 4 caracteres",
        priority: 2,
      },
      "value should be greater or equal than 2024.": {
        test: "O valor deve ser maior ou igual 2024",
        priority: 3,
      },
      "should be a value from 1 to 12.": {
        test: "O valor deve ser de 1 a 12",
        priority: 3,
      },
    };

    for (let error of errorMessages) {
      for (let key in mapErrors) {
        const matchError = error.message === `${error.field} ${key}`;

        if (matchError) {
          errors.push(mapErrors[key]);
        }
      }
    }

    validate("", field, errors);
  }

  function handleChange(evt: MPChangeEvent) {
    const { field } = evt;

    setEmptyInputInitialValue((inputs) => ({
      ...inputs,
      [field]: false,
    }));
  }

  function handleBinChange(evt: MPBinChangeEvent) {
    const { bin } = evt;

    const cardFlags = {
      mastercard: {
        prefixes: [50, 51, 52, 53, 54, 55, 2221, 2720],
        icon: "logos:mastercard",
      },
      elo: {
        prefixes: [
          4011, 4312, 4389, 4514, 4576, 5041, 5066, 5067, 5068, 5090, 6277,
          6363, 6504, 6505, 6506, 6507, 6509, 6516, 6550, 6551, 6552, 6553,
        ],
        icon: "logos:elo",
      },
      american: {
        prefixes: [34, 37],
        icon: "fontisto:american-express",
      },
      dinersClub: {
        prefixes: [36, 38, 39, 300, 301, 302, 304, 305],
        icon: "cib:cc-diners-club",
      },
      visa: {
        prefixes: [4],
        icon: "logos:visa",
      },
      hipercard: {
        prefixes: [38, 60],
        icon: "logos:hipercard",
      },
    };

    const identifyCardFlag = (prefixes: number[]) =>
      prefixes.some((prefix) => bin?.startsWith(String(prefix)));

    const flag =
      (Object.entries(cardFlags).find(([_, data]) =>
        identifyCardFlag(data.prefixes),
      )?.[1].icon as CardFlag) ?? "noFlag";

    setCardData((prev) => ({ ...prev, flag }));
  }

  return (
    <div className="mt-5 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <InputCard
          label="Número do cartão"
          InputComponent={CardNumberMemoized}
          onValidityChange={handleValidityChange}
          error={errors.cardNumber}
          onChange={handleChange}
          onBinChange={handleBinChange}
          cardFlag={cardData.flag}
        />
        <InputText
          value={cardData.name}
          onChange={handleCardName}
          label="Nome no cartão"
          name="name"
          error={errors.name}
        />
        <InputCard
          label="CVC"
          InputComponent={SecurityCodeMemoized}
          onValidityChange={handleValidityChange}
          error={errors.securityCode}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col flex-1">
          <label className="text-xs font-medium">Data de expiração</label>
          <div className="flex gap-4">
            <InputCard
              InputComponent={ExpirationMonthMemoized}
              onValidityChange={handleValidityChange}
              error={errors.expirationMonth}
              placeholder="Mês"
              onChange={handleChange}
            />
            <InputCard
              InputComponent={ExpirationYearMemoized}
              onValidityChange={handleValidityChange}
              error={errors.expirationYear}
              placeholder="Ano"
              onChange={handleChange}
            />
          </div>
        </div>
        <InputSelect
          label="Parcelas"
          name="installments"
          value={cardData.installments}
          onChange={handleCardInstallments}
          options={[...Array(12)].map((_, i) => {
            return {
              value: i + 1,
              label: `${i + 1}x de ${currencyConverter(calculateCartTotal() / (i + 1))} sem juros`,
            };
          })}
        />
      </div>
    </div>
  );
}
