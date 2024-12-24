import { Delivery } from "@/app/(private)/checkout/types/delivery";
import { PaymentMethod } from "@/app/(private)/checkout/types/payment";

export interface Order {
  userId: string;
  orderId: string;
  status: string;
  price: number;
  paymentMethod: "bolbradesco" | "pix" | undefined;
  installments: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  details: {};
  delivery: Delivery;
  products: {
    id: string;
    quantity: number;
    unitPrice: number;
  }[];
  createdAt: Date;
}

export interface Payment {
  price: number;
  paymentMethod: PaymentMethod;
  installments: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  delivery: Delivery;
}
