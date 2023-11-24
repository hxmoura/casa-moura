import { useContext, ReactNode } from 'react';
import { MenuContext } from '../../../contexts/MenuProvider';

interface ListMenuProps {
  children: ReactNode;
}

export default function ListMenu({ children }: ListMenuProps) {
  const { handleMenuToggle, menuIsOpen } = useContext(MenuContext)!;

  function toggleMenu() {
    if (window.innerWidth >= 900) {
      handleMenuToggle();
    }
  }

  return (
    <>
      {menuIsOpen && (
        <nav className="relative">
          <ul
            className="absolute w-full"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
          >
            {children}
          </ul>
        </nav>
      )}
    </>
  );
}
