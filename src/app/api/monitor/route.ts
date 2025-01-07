import { updateOrder } from "@/api/queries/order";
import { Response } from "@/api/services/Response";
import fetcher from "@/utils/fetcher";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const notification = await req.json();

    if (notification.type === "payment") {
      const paymentId = notification.data.id;

      const paymentDetails = await fetcher(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.MP_SERVER_KEY}`,
          },
        },
      );

      const status = paymentDetails.status;

      await updateOrder(String(paymentId), { status });
      return NextResponse.json(
        Response.Success(
          `Order status ${paymentId} has been updated to ${status}`,
        ),
      );
    } else {
      return NextResponse.json(Response.Failure("Invalid update type"));
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(Response.Failure("Unable to process payment"));
  }
}
