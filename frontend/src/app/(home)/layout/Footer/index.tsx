'use client';

import Container from '@/components/Container';

import Form from './Form';
import Payments from './Payments';
import Support from './Support';
import About from './About';

export default function Footer() {
  return (
    <footer className="bg-background-light border-t-2 border-background-softLight mt-20 py-8">
      <Container>
        <div className="flex flex-wrap md:justify-center gap-12 md:gap-24">
          <Form />
          <Payments />
          <Support />
          <About />
        </div>
        <p className="text-sm text-center mt-8">
          © 2023 Casa Moura - Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}
