import Button from "@/components/Button";
import InputText from "@/components/InputText";
import useInputValidate from "@/hooks/useInputValidate";
import { ChangeEvent, FormEvent, useState } from "react";
import CheckoutContainer from "@/components/CheckoutContainer";
import { PaymentMethod } from "../types/payment";
import { FormStep } from "../types/form";
import { Delivery as DeliveryType } from "../types/delivery";

interface DeliveryProps {
  formStep: FormStep;
  onFormStep: (step: FormStep) => void;
  paymentMethodData: PaymentMethod | null;
  onReceiveDelivery: (value: DeliveryType) => void;
  onFormEditing: (value: boolean) => void;
}

export default function Delivery({
  formStep,
  onFormStep,
  paymentMethodData,
  onReceiveDelivery,
  onFormEditing,
}: DeliveryProps) {
  const { errors, validate, isRequired, minLength, onlyNumber, isEmptyErrors } =
    useInputValidate();

  const [delivery, setDelivery] = useState<DeliveryType>({
    cep: "",
    address: "",
    neighborhood: "",
    city: "",
    number: "",
    state: "",
  });

  async function handleCEP(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;

    let newValue = value.trim();

    validate(name, newValue, [
      isRequired,
      (value: string) => minLength(value, 8),
      onlyNumber,
    ]);

    setDelivery((prev) => ({ ...prev, cep: newValue }));

    if (newValue.length === 8 && !isNaN(+newValue)) {
      const getCEP = await fetch(`https://viacep.com.br/ws/${newValue}/json/`);
      const cepData = await getCEP.json();

      if (cepData.uf) {
        setDelivery((prev) => ({ ...prev, state: cepData.uf }));
        validate(name, newValue, [() => null]);
      } else {
        return validate(name, newValue, [() => "O CEP é inválido"]);
      }
    }
  }

  function handleAddress(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setDelivery((prev) => ({ ...prev, address: value }));

    validate(name, value, [isRequired]);
  }

  function handleNeighborhood(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setDelivery((prev) => ({ ...prev, neighborhood: value }));

    validate(name, value, [isRequired]);
  }

  function handleCity(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;
    setDelivery((prev) => ({ ...prev, city: value }));

    validate(name, value, [isRequired]);
  }

  function handleNumber(evt: ChangeEvent<HTMLInputElement>) {
    const { value, name } = evt.target;

    let newValue = value.trim();

    validate(name, newValue, [isRequired, onlyNumber]);

    setDelivery((prev) => ({ ...prev, number: newValue }));
  }

  function handleSubmitDelivery(evt: FormEvent) {
    evt.preventDefault();
    onReceiveDelivery(delivery);
    onFormEditing(false);

    return paymentMethodData ? onFormStep("summary") : onFormStep("payment");
  }

  function handleEditDelivery() {
    onFormEditing(true);
    onFormStep("delivery");
  }

  return (
    <CheckoutContainer>
      <div className="flex items-center gap-2 mb-7">
        <div className="rounded-full w-6 h-6 lg:w-7 lg:h-7 bg-text-main flex justify-center items-center">
          <span className="text-white font-medium text-sm lg:text-base">1</span>
        </div>
        <h5 className="text-sm lg:text-lg font-medium">Endereço de entrega</h5>
      </div>
      {formStep === "delivery" ? (
        <form className="flex flex-col gap-6" onSubmit={handleSubmitDelivery}>
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <InputText
              label="CEP"
              name="cep"
              value={delivery.cep}
              onChange={handleCEP}
              maxLength={8}
              error={errors.cep}
            />
            <InputText
              label="Endereço"
              name="address"
              value={delivery.address}
              onChange={handleAddress}
              error={errors.address}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <InputText
              label="Bairro"
              name="neighborhood"
              value={delivery.neighborhood}
              onChange={handleNeighborhood}
              error={errors.neighborhood}
            />
            <InputText
              label="Cidade"
              name="city"
              value={delivery.city}
              onChange={handleCity}
              error={errors.city}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <InputText
              label="Número"
              name="number"
              value={delivery.number}
              onChange={handleNumber}
              error={errors.number}
            />
            <InputText label="Estado" value={delivery.state} readOnly />
          </div>
          <Button
            type="submit"
            disabled={
              !delivery.address.trim() ||
              !delivery.city.trim() ||
              !delivery.cep.trim() ||
              !delivery.neighborhood.trim() ||
              !delivery.number.trim() ||
              !isEmptyErrors
            }
          >
            {paymentMethodData ? "Confirmar alteração" : "Ir para o pagamento"}
          </Button>
        </form>
      ) : (
        <div>
          <div className="flex flex-col gap-2 mb-5">
            <span className="text-xs lg:text-sm">
              <strong className="font-medium">CEP:</strong> {delivery.cep}
            </span>
            <span className="text-xs lg:text-sm">
              <strong className="font-medium">Endereço:</strong>{" "}
              {delivery.address}
            </span>
            <span className="text-xs lg:text-sm">
              <strong className="font-medium">Bairro:</strong>{" "}
              {delivery.neighborhood}
            </span>
            <span className="text-xs lg:text-sm">
              <strong className="font-medium">Cidade:</strong> {delivery.city}
            </span>
            <span className="text-xs lg:text-sm">
              <strong className="font-medium">Número:</strong> {delivery.number}
            </span>
            <span className="text-xs lg:text-sm">
              <strong className="font-medium">Estado:</strong> {delivery.state}
            </span>
          </div>
          <Button style="outline" onClick={handleEditDelivery}>
            Alterar endereço
          </Button>
        </div>
      )}
    </CheckoutContainer>
  );
}
