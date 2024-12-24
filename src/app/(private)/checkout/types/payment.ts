export type PaymentMethod = "pix" | "card" | "bankSlip";

export type CardFlag =
  | "noFlag"
  | "logos:mastercard"
  | "logos:elo"
  | "fontisto:american-express"
  | "cib:cc-diners-club"
  | "logos:visa";

export interface CardInformations {
  name: string;
  token: string;
  installments: number;
  lastFourDigits: string;
  flag: CardFlag;
}
