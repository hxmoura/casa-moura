import MercadoPagoConfig, { Payment } from "mercadopago";
import { Response } from "../../../api/services/Response";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_SERVER_KEY || "",
});

export async function POST(req: Request) {
  try {
    const order = await req.json();
    const payment = new Payment(client);

    const pay = await payment.create({
      body: {
        token: order.token,
        transaction_amount: order.price,
        payment_method_id: order.paymentMethod,
        installments: order.installments,
        payer: {
          email: order.user.email,
          first_name: order.user.name,
          last_name: order.user.lastname,
          identification: {
            type: "CPF",
            number: order.user.cpf,
          },
          address: {
            zip_code: order.user.delivery.cep,
            city: order.user.delivery.city,
            neighborhood: order.user.delivery.neighborhood,
            street_name: order.user.delivery.address,
            street_number: order.user.delivery.number,
            federal_unit: order.user.delivery.state,
          },
        },
      },
      requestOptions: { idempotencyKey: String(Date.now()) },
    });

    return NextResponse.json(Response.Success(pay));
  } catch (err) {
    console.log(err);
    return NextResponse.json(Response.Failure("Unable to complete payment"));
  }
}
