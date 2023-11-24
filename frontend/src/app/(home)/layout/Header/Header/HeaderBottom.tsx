import Container from '@/components/Container';
import { Icon } from '@iconify/react';

import { useContext } from 'react';
import { MenuContext } from '@/app/(home)/contexts/MenuProvider';

export default function HeaderBottom() {
  const { handleMenuToggle } = useContext(MenuContext)!;

  return (
    <section className="bg-brand-primaryDark hidden lg:block h-[60px]">
      <Container>
        <ul className="flex h-full gap-3">
          <li
            onMouseEnter={handleMenuToggle}
            onMouseLeave={handleMenuToggle}
            onClick={handleMenuToggle}
            className="flex items-center px-3 hover:bg-brand-secondary transition-colors cursor-pointer"
          >
            <button className="flex items-center gap-[10px]">
              <Icon
                className="text-white w-6 h-6"
                icon="heroicons-outline:menu"
              />
              <span className="text-white text-sm">Departamentos</span>
            </button>
          </li>
          <li className="flex items-center px-3 hover:bg-brand-secondary transition-colors cursor-pointer">
            <a className="text-white text-sm" href="#">
              Serviços
            </a>
          </li>
          <li className="flex items-center px-3 hover:bg-brand-secondary transition-colors cursor-pointer">
            <a className="text-white text-sm" href="#">
              Dicas
            </a>
          </li>
          <li className="flex items-center px-3 hover:bg-brand-secondary transition-colors cursor-pointer">
            <a className="text-white text-sm" href="#">
              Suporte
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
