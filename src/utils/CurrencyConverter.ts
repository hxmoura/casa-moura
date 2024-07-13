export function currencyConverter(value: number): string {
  return value?.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

export function currencyIntoNumberConverter(valor: string): number {
  let result;
  result = valor.replace("R$ ", "").replace(".", "").replace(",", ".");
  result = parseFloat(result);
  return result;
}
