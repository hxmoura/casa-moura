import { Icon } from '@iconify/react';

export default function Payments() {
  return (
    <section>
      <h6 className="font-medium mb-4">Formas de pagamento:</h6>
      <ul className="flex flex-wrap gap-[10px] max-w-[240px]">
        <li className="bg-white w-[70px] h-10 flex items-center justify-center rounded-md border border-background-softLight">
          <Icon icon="logos:mastercard" width={39} height={24} />
        </li>
        <li className="bg-white w-[70px] h-10 flex items-center justify-center rounded-md border border-background-softLight">
          <Icon icon="logos:visa" width={40} height={12} />
        </li>
        <li className="bg-white w-[70px] h-10 flex items-center justify-center rounded-md border border-background-softLight">
          <Icon icon="logos:elo" width={40} height={15} />
        </li>
        <li className="bg-white w-[70px] h-10 flex items-center justify-center rounded-md border border-background-softLight">
          <Icon icon="ic:outline-pix" width={25} height={25} />
        </li>
        <li className="bg-white w-[70px] h-10 flex items-center justify-center rounded-md border border-background-softLight">
          <Icon icon="ph:barcode-light" width={25} height={25} />
        </li>
      </ul>
    </section>
  );
}
