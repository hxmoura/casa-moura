'use client';

import { createContext, ReactNode } from 'react';
import getProducts from '../api/getProducts';
import getCategories from '../api/getCategories';

interface CartProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext([]);

export async function ProductProvider({ children }: CartProviderProps) {
  const data = await getProducts();
  const a = await getCategories();

  console.log({ data, a });

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}
