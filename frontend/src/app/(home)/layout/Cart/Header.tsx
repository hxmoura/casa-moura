import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';

export default function CartHeader() {
  const { handleToggleCart } = useContext(CartContext)!;

  return (
    <header className="h-[60px] bg-brand-primary flex items-center justify-between p-5">
      <p className="text-white font-medium text-sm">Meu carrinho (3)</p>
      <Icon
        className="w-5 h-5 text-white cursor-pointer"
        icon="heroicons:x-mark"
        onClick={handleToggleCart}
      />
    </header>
  );
}
