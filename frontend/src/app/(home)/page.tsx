// import { useState, useEffect } from 'react';
// import { ProductProvider } from './contexts/ProductProvider';
import { CartProvider } from './contexts/CartProvider';

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Cart from './layout/Cart';

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <Content />
      <Footer />
      <Cart />
    </CartProvider>
  );
}
