import { Icon } from '@iconify/react';

export default function Form() {
  return (
    <form>
      <label htmlFor="input-email" className="font-medium">
        Fique por dentro das <br /> promoções e novidades:
      </label>
      <div className="flex max-w-[250px] h-[45px] relative mt-3">
        <Icon
          className="absolute top-2/4 left-[10px] -translate-y-2/4"
          icon="heroicons:envelope"
          width={25}
          height={25}
        />
        <input
          id="input-email"
          className="w-full h-full rounded-l-lg pl-11 text-xs outline-none"
          type="email"
          placeholder="Seu melhor e-mail"
        />
        <button className="bg-brand-secondary p-[10px] text-white h-full rounded-r-lg">
          <Icon icon="heroicons:paper-airplane-solid" width={25} height={25} />
        </button>
      </div>
    </form>
  );
}
