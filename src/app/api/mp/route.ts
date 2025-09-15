import MercadoPagoConfig, { Payment } from "mercadopago";
import { NextResponse } from "next/server";
import { Response } from "../../../api/services/Response";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_SERVER_KEY || "",
});

export async function POST(req: Request) {
  try {
    const order = await req.json();
    const payment = new Payment(client);

    const body: any = {
      transaction_amount: Number(order.price),
      payment_method_id: order.paymentMethod,
      installments: order.installments || 1,
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
    };

    if (
      order.paymentMethod !== "pix" &&
      order.paymentMethod !== "bolbradesco"
    ) {
      body.token = order.token;
    }

    const pay = await payment.create({
      body,
      requestOptions: { idempotencyKey: String(Date.now()) },
    });

    return NextResponse.json(Response.Success(pay));
  } catch (err) {
    console.log(err);
    return NextResponse.json(Response.Failure("Unable to complete payment"));
  }
}
