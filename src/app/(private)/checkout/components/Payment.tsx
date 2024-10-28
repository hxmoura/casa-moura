import { Icon } from "@iconify/react/dist/iconify.js";
import CheckoutContainer from "@/components/CheckoutContainer";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import useInputValidate from "@/hooks/useInputValidate";
import { ChangeEvent, FormEvent, useState } from "react";
import { currencyConverter } from "@/utils/CurrencyConverter";
import { useCart } from "@/contexts/CartContext";
import Button from "@/components/Button";
import InputRadio from "@/components/InputRadio";
import { FormStep } from "../types/form";
import { CardInformations, PaymentMethod } from "../types/payment";

interface PaymentProps {
  formStep: FormStep;
  onFormStep: (step: FormStep) => void;
  paymentMethodData: PaymentMethod | null;
  onReceivePaymentMethod: (method: PaymentMethod) => void;
  onReceiveCardInformations: (value: CardInformations) => void;
  onFormEditing: (value: boolean) => void;
}

export default function Payment({
  formStep,
  onFormStep,
  paymentMethodData,
  onReceivePaymentMethod,
  onReceiveCardInformations,
  onFormEditing,
}: PaymentProps) {
  const [paymentSelect, setPaymentSelect] = useState<PaymentMethod | null>(
    null,
  );
  const { errors, isRequired, onlyNumber, validate, isEmptyErrors } =
    useInputValidate();
  const { calculateCartTotal } = useCart();

  const [cardInformation, setCardInformation] = useState<CardInformations>({
    number: "",
    name: "",
    cvv: "",
    expirationMonth: 0,
    expirationYear: 0,
    installments: 1,
  });

  function handleCardNumber(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    setCardInformation((prev) => ({
      ...prev,
      number: value,
    }));

    validate(name, value, [isRequired, onlyNumber]);
  }

  function handleCardName(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    setCardInformation((prev) => ({
      ...prev,
      name: value,
    }));

    validate(name, value, [isRequired]);
  }

  function handleCVV(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    setCardInformation((prev) => ({
      ...prev,
      cvv: value,
    }));

    validate(name, value, [isRequired, onlyNumber]);
  }

  function handleInputSelect(evt: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = evt.target;

    setCardInformation((prev) => ({
      ...prev,
      [name]: +value,
    }));

    validate(name, value, [isRequired]);
  }

  function handleSubmitPayment(evt: FormEvent) {
    evt.preventDefault();

    if (paymentSelect) {
      onReceivePaymentMethod(paymentSelect);
      onReceiveCardInformations(cardInformation);
      onFormStep("summary");
      onFormEditing(false);
    }
  }

  const isPix = paymentSelect === "pix";
  const isCard = paymentSelect === "card";
  const isbankSlip = paymentSelect === "bankSlip";

  function handleEditPayment() {
    onFormEditing(true);
    onFormStep("payment");
  }

  return (
    <CheckoutContainer>
      <div className="flex items-center gap-2 mb-7">
        <div className="rounded-full w-6 h-6 lg:w-7 lg:h-7 bg-text-main flex justify-center items-center">
          <span className="text-white font-medium text-sm lg:text-base">2</span>
        </div>
        <h5 className="text-sm lg:text-lg font-medium">Métodos de pagamento</h5>
      </div>
      {formStep === "payment" ? (
        <form onSubmit={handleSubmitPayment}>
          <fieldset className="space-y-3">
            <div
              className={`flex flex-col bg-background-light rounded p-4 cursor-pointer border border-background-softLight ${isCard && "border-brand-secondary"}`}
              onClick={() => setPaymentSelect("card")}
            >
              <div className="flex items-center gap-5">
                <InputRadio
                  name="payment"
                  value="card"
                  checked={isCard}
                  onChange={() => setPaymentSelect("card")}
                />
                <label
                  htmlFor="card"
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <Icon icon="fxemoji:creditcard" className="w-7 h-7" />
                  Cartão
                </label>
              </div>
              {isCard && (
                <div className="mt-5 space-y-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <InputText
                      label="Número do cartão"
                      name="cardNumber"
                      value={cardInformation.number}
                      onChange={handleCardNumber}
                      maxLength={16}
                      error={errors.cardNumber}
                    />
                    <InputText
                      label="Nome no cartão"
                      name="cardName"
                      value={cardInformation.name}
                      onChange={handleCardName}
                      error={errors.cardName}
                    />
                    <InputText
                      label="CVV"
                      name="cvv"
                      value={cardInformation.cvv}
                      onChange={handleCVV}
                      maxLength={3}
                      error={errors.cvv}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-end gap-6">
                    <div className="flex flex-1 items-end gap-4">
                      <InputSelect
                        label="Data de expiração"
                        name="expirationMonth"
                        value={cardInformation.expirationMonth}
                        onChange={handleInputSelect}
                        placeholder="Mês"
                        options={[...Array(12)].map((_, i) => {
                          return {
                            value: i + 1,
                            label: `${i + 1}`,
                          };
                        })}
                        error={errors.expirationMonth}
                      />
                      <InputSelect
                        value={cardInformation.expirationYear}
                        name="expirationYear"
                        onChange={handleInputSelect}
                        placeholder="Ano"
                        options={[
                          { value: 2025, label: "2025" },
                          { value: 2026, label: "2026" },
                          { value: 2027, label: "2027" },
                          { value: 2028, label: "2028" },
                          { value: 2029, label: "2029" },
                          { value: 2030, label: "2030" },
                          { value: 2031, label: "2031" },
                          { value: 2032, label: "2032" },
                          { value: 2033, label: "2033" },
                          { value: 2034, label: "2034" },
                        ]}
                        error={errors.expirationYear}
                      />
                    </div>
                    <InputSelect
                      label="Parcelas"
                      name="installments"
                      value={cardInformation.installments}
                      onChange={handleInputSelect}
                      options={[...Array(12)].map((_, i) => {
                        return {
                          value: i + 1,
                          label: `${i + 1}x de ${currencyConverter(calculateCartTotal() / (i + 1))} sem juros`,
                        };
                      })}
                    />
                  </div>
                  <p className="text-text-light text-xs">
                    Por segurança, não armazenamos nenhuma informação referente
                    ao seu cartão!
                  </p>
                </div>
              )}
            </div>
            <div
              className={`flex items-center gap-5 bg-background-light rounded p-4 cursor-pointer border border-background-softLight ${isPix && "border-brand-secondary"}`}
              onClick={() => setPaymentSelect("pix")}
            >
              <InputRadio
                name="payment"
                value="pix"
                checked={isPix}
                onChange={() => setPaymentSelect("pix")}
              />
              <label
                htmlFor="pix"
                className="font-medium text-sm flex items-center gap-2"
              >
                <Icon
                  icon="ic:baseline-pix"
                  className="w-7 h-7 text-[#7AB7A9]"
                />
                Pix
              </label>
            </div>
            <div
              className={`flex items-center gap-5 bg-background-light rounded p-4 cursor-pointer border border-background-softLight ${isbankSlip && "border-brand-secondary"}`}
              onClick={() => setPaymentSelect("bankSlip")}
            >
              <InputRadio
                name="payment"
                value="bankSlip"
                checked={isbankSlip}
                onChange={() => setPaymentSelect("bankSlip")}
              />
              <label
                htmlFor="bankSlip"
                className="font-medium text-sm flex items-center gap-2"
              >
                <Icon icon="prime:barcode" className="w-7 h-7" />
                Boleto
              </label>
            </div>
          </fieldset>

          {paymentSelect && (
            <div className="mt-9">
              <Button
                type="submit"
                disabled={
                  isCard
                    ? !cardInformation.cvv.trim() ||
                      !cardInformation.expirationMonth ||
                      !cardInformation.expirationYear ||
                      !cardInformation.installments ||
                      !cardInformation.name.trim() ||
                      !cardInformation.number.trim() ||
                      !isEmptyErrors
                    : false
                }
              >
                Selecionar pagamento no {isbankSlip && "Boleto"}
                {isCard && "Cartão"}
                {isPix && "Pix"}
              </Button>
            </div>
          )}
        </form>
      ) : (
        <>
          {paymentMethodData ? (
            <div>
              <div className="flex flex-col gap-2 mb-5">
                <span className="text-xs lg:text-sm">
                  <strong className="font-medium">Método:</strong>{" "}
                  {isbankSlip && "Boleto"}
                  {isPix && "Pix"}
                  {isCard && "Cartão"}
                </span>
                {paymentMethodData === "card" && (
                  <>
                    <span className="text-xs lg:text-sm">
                      <strong className="font-medium">Parcelas:</strong>{" "}
                      {cardInformation.installments}x de{" "}
                      {currencyConverter(
                        calculateCartTotal() / cardInformation.installments,
                      )}
                    </span>
                    <span className="text-xs lg:text-sm">
                      <strong className="font-medium">Cartão:</strong> final{" "}
                      {cardInformation.number.slice(-4)}
                    </span>
                  </>
                )}
              </div>
              <Button style="outline" onClick={handleEditPayment}>
                Alterar pagamento
              </Button>
            </div>
          ) : (
            <p className="text-xs lg:text-sm text-text-light">
              Preencha as informações de entrega para escolher o método de
              pagamento!
            </p>
          )}
        </>
      )}
    </CheckoutContainer>
  );
}
