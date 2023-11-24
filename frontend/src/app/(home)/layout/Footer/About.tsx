export default function About() {
  return (
    <section>
      <h6 className="font-medium mb-4">Sobre a Casa Moura</h6>
      <ul className="flex flex-col gap-2">
        <li>
          <a
            className="text-text-light text-xs font-medium hover:underline"
            href="#"
          >
            Nossa história
          </a>
        </li>
        <li>
          <a
            className="text-text-light text-xs font-medium hover:underline"
            href="#"
          >
            Políticas de privacidade
          </a>
        </li>
        <li>
          <a
            className="text-text-light text-xs font-medium hover:underline"
            href="#"
          >
            Políticas de pagamento
          </a>
        </li>
        <li>
          <a
            className="text-text-light text-xs font-medium hover:underline"
            href="#"
          >
            Política de troca e devolução
          </a>
        </li>
        <li>
          <a
            className="text-text-light text-xs font-medium hover:underline"
            href="#"
          >
            Política de entrega
          </a>
        </li>
      </ul>
    </section>
  );
}
