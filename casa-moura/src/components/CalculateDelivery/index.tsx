import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";
import InputText from "../InputText";

export default function CalculateDelivery() {
  return (
    <div className="w-full">
      <label className="text-sm font-medium" htmlFor="calculateDelivery">
        Calcule o frete
      </label>

      <div className="flex items-center gap-3 mt-2">
        <InputText value="" placeholder="00000-000" />
        <Button disabled className="max-w-20 w-full">
          Calcular
        </Button>
      </div>
      <a href="#" className="text-xs flex items-center gap-1 w-fit mt-2">
        Não sei meu CEP
        <Icon icon="eva:external-link-outline" className="w-3 h-3" />
      </a>
    </div>
  );
}
