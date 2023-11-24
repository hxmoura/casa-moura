'use client';
import { MenuProvider } from '../../contexts/MenuProvider';

import HeaderLayout from './Header';
import Menu from './Menu';

export default function Header() {
  return (
    <MenuProvider>
      <header>
        <HeaderLayout />
        <Menu />
      </header>
    </MenuProvider>
  );
}
