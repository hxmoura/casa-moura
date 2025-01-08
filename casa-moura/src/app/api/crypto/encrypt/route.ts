import crypto from "crypto";
import { NextResponse } from "next/server";

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.CRYPTO_KEY || "", "hex");

export async function POST(req: Request) {
  const { text } = await req.json();

  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return NextResponse.json({ encrypted: `${iv.toString("hex")}:${encrypted}` });
}
