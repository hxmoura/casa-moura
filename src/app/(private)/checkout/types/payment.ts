export type PaymentMethod = "pix" | "card" | "bankSlip";

export interface CardInformations {
  number: string;
  name: string;
  cvv: string;
  expirationMonth: number;
  expirationYear: number;
  installments: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
