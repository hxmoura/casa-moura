import crypto from "crypto";
import { NextResponse } from "next/server";

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.CRYPTO_KEY || "", "hex");

export async function POST(req: Request) {
  const { text } = await req.json();

  const [ivHex, encryptedData] = text.split(":");
  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return NextResponse.json({ decrypted });
}
