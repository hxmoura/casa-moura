import { Delivery } from "@/app/(private)/checkout/types/delivery";
import { PaymentMethod } from "@/app/(private)/checkout/types/payment";

interface Product {
  id: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  paymentMethod: PaymentMethod;
  installments: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  delivery: Delivery;
  price: number;
  products: Product[];
  date: string;
  time: string;
}

export interface UserData {
  id: string;
  name: string;
  lastName: string;
  orders: Order[];
}
