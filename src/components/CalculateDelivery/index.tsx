import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";

export default function CalculateDelivery() {
  return (
    <div className="w-full">
      <label className="text-sm font-medium" htmlFor="calculateDelivery">
        Calcule o frete
      </label>

      <div className="flex gap-3 mt-2">
        <input
          type="text"
          id="calculateDelivery"
          placeholder="00000-000"
          className="h-10 w-full border border-background-softLight rounded outline-none text-sm px-3"
        />
        <div className="max-w-20 w-full">
          <Button disabled>Calcular</Button>
        </div>
      </div>
      <a href="#" className="text-xs flex items-center gap-1 w-fit mt-2">
        Não sei meu CEP
        <Icon icon="eva:external-link-outline" className="w-3 h-3" />
      </a>
    </div>
  );
}
