"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/Header";
import Form from "./components/Form";

export default function Login() {
  return (
    <>
      <Header type="short" />
      <main className="my-20">
        <Container>
          <div className="flex flex-col items-center">
            <h6 className="text-3xl font-semibold text-center">Login</h6>
            <p className="font-medium text-text-light text-center mt-3">
              Seja bem-vindo(a) de volta!
            </p>

            <Suspense fallback={<div></div>}>
              <Form />
            </Suspense>

            <p className="text-text-light text-xs text-center max-w-[480px] w-full">
              Seus dados estão protegidos de acordo com nossa{" "}
              <Link href="#" className="font-medium hover:underline">
                política de privacidade
              </Link>{" "}
              e{" "}
              <Link href="#" className="font-medium hover:underline">
                termos e condições
              </Link>
              . Todos os direitos reservados - Casa Moura.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
