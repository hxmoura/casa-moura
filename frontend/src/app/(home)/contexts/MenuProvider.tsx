import { useState, createContext, ReactNode } from 'react';

interface MenuContextType {
  menuIsOpen: boolean;
  selectedMenu: number | null;
  handleMenuToggle: () => void;
  toggleSelectedMenu: (selected: number) => void;
  // NotSelectedMenu: () => void;
}

type MenuProviderProps = {
  children: ReactNode;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: MenuProviderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  const handleMenuToggle = () => setMenuIsOpen((prevState) => !prevState);

  const toggleSelectedMenu = (selected: number | null) => {
    selectedMenu === selected
      ? setSelectedMenu(null)
      : setSelectedMenu(selected);
  };

  // interface ToggleProps {
  //   selected?: number;
  // }

  // const toggleSelectedMenu = (selected: ToggleProps) => {
  //   if (selected === selectedMenu) {
  //     setSelectedMenu(selected);
  //   } else {
  //     setSelectedMenu(null);
  //   }
  // };

  // const NotSelectedMenu = () => setSelectedMenu(null);

  const menuContextValue: MenuContextType = {
    menuIsOpen,
    selectedMenu,
    handleMenuToggle,
    toggleSelectedMenu,
    // NotSelectedMenu,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      {children}
    </MenuContext.Provider>
  );
}
