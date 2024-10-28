import Button from "@/components/Button";
import { useCart } from "@/contexts/CartContext";
import { currencyConverter } from "@/utils/CurrencyConverter";

interface ProductSummaryProps {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  installments?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export default function ProductSummary({
  href,
  onClick,
  disabled,
  loading,
  installments,
}: ProductSummaryProps) {
  const { cart, calculateCartTotal } = useCart();

  return (
    <>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <p className="text-text-light text-sm">
            Subtotal ({cart.length} {cart.length > 0 ? "Itens" : "Item"})
          </p>
          <p className="text-text-light text-sm">
            {currencyConverter(calculateCartTotal())}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="text-text-light text-sm">Frete</p>
          <p className="text-text-light text-sm">--</p>
        </li>
        <li className="flex justify-between">
          <p className="text-text-light text-sm">Desconto</p>
          <p className="text-text-light text-sm">--</p>
        </li>
      </ul>
      <div className="flex items-center justify-between mb-7 mt-5">
        <p className="font-medium text-lg">Total</p>
        <div>
          <p className="text-right font-medium text-lg">
            {currencyConverter(calculateCartTotal())}
          </p>
          {installments && installments !== 1 ? (
            <small className="text-text-light text-sm">
              {installments}x de{" "}
              {currencyConverter(calculateCartTotal() / installments)}
            </small>
          ) : (
            <small className="text-text-light text-sm">
              1x de {currencyConverter(calculateCartTotal())}
            </small>
          )}
        </div>
      </div>
      <Button
        href={href}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
      >
        Finalizar pedido
      </Button>
    </>
  );
}
