export type PaymentMethod = "pix" | "card" | "bankSlip";

export interface CardInformations {
  number: string;
  name: string;
  cvv: string;
  expirationMonth: number;
  expirationYear: number;
  installments: number;
}
