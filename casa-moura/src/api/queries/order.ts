import fetcher from "@/utils/fetcher";
import firestore from "../db/firestore";
import { PaymentMethod } from "@/app/(private)/checkout/types/payment";
import { Delivery } from "@/app/(private)/checkout/types/delivery";
import { User } from "@/contexts/UserContext";
import { ProductCart } from "@/contexts/CartContext";

interface createPaymentProps {
  token?: string;
  price: number;
  paymentMethod: PaymentMethod;
  installments: number;
  user: {
    id: string;
    email: string;
    name: string;
    lastname: string;
    cpf: string;
    delivery: Delivery;
  };
}

interface PaymentData {
  id: number;
  status: string;
  transaction_amount: number;
  installments: number;
  transaction_details: {
    external_resource_url: string;
    barcode: {
      content: string;
    };
  };
  point_of_interaction: {
    transaction_data: {
      qr_code_base64: string;
      qr_code: string;
    };
  };
}

export async function createOrder({
  payment,
  paymentMethod,
  user,
  delivery,
  products,
}: {
  payment: PaymentData;
  paymentMethod: PaymentMethod;
  user: User;
  delivery: Delivery;
  products: ProductCart[];
}) {
  const order = {
    orderId: String(payment.id),
    status: payment.status,
    price: payment.transaction_amount,
    installments: payment.installments,
    paymentMethod,
    details:
      paymentMethod === "pix"
        ? {
            qrCode:
              payment.point_of_interaction.transaction_data.qr_code_base64,
            pix: payment.point_of_interaction.transaction_data.qr_code,
          }
        : paymentMethod === "bankSlip"
          ? {
              barcode: payment.transaction_details.barcode.content,
              ticket: payment.transaction_details.external_resource_url,
            }
          : {},
    userId: user.uid,
    delivery: delivery,
    products: products.map((product) => ({
      id: product.id,
      quantity: product.quantityInCart,
      unitPrice: product.promotionalPrice || product.price,
    })),
    createdAt: new Date(),
  };

  return await firestore.create("orders", order.orderId, order);
}

export async function createPayment({
  token,
  price,
  installments,
  user,
  paymentMethod,
}: createPaymentProps) {
  const isTicket = paymentMethod === "bankSlip";
  const isPix = paymentMethod === "pix";

  const paymentResponse = await fetcher("/api/mp", {
    method: "POST",
    body: JSON.stringify({
      token,
      price,
      installments,
      user,
      paymentMethod: isTicket ? "bolbradesco" : isPix ? "pix" : null,
    }),
  });

  return paymentResponse;
}

export async function getOrder(id: string) {
  return await firestore.getById("orders", id);
}

export async function updateOrder(id: string, data: any) {
  return await firestore.update("orders", id, data);
}
