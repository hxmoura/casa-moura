'use client';

import { createContext, useState, ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface valueProps {
  cartIsOpen: boolean;
  handleToggleCart: () => void;
}

export const CartContext = createContext<valueProps | null>(null);

export function CartProvider({ children }: CartProviderProps) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const handleToggleCart = () => setCartIsOpen((prevState) => !prevState);

  const value: valueProps = {
    cartIsOpen,
    handleToggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
