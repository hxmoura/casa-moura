import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Product } from "@/types/product";
import { getProduct } from "@/api/products";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContext {
  cart: ProductCart[];
  addProductToCart: (product: Product, quantity?: number) => void;
  deleteProductToCart: (product: Product) => void;
  calculateCartTotal: () => number;
  addProductQuantity: (product: ProductCart, quantity?: number) => void;
  subtractProductQuantity: (product: ProductCart) => void;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  handleCartOpening: () => void;
  fetchProductsFromLocalStorage: () => void;
}

export const CartContext = createContext<CartContext | null>(null);

interface ProductCart extends Product {
  quantityInCart: number;
}

interface LocalProduct {
  id: string;
  quantityInCart: number;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [localCart, setLocalCart] = useState<LocalProduct[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const oldCart = useRef(cart);

  useEffect(() => {
    const getLocalCart = localStorage.getItem("cart");
    setLocalCart(getLocalCart ? JSON.parse(getLocalCart) : []);
  }, []);

  useEffect(() => {
    if (oldCart.current !== cart) {
      const summaryCart = cart.map(({ id, quantityInCart }) => {
        return { id, quantityInCart };
      });
      localStorage.setItem("cart", JSON.stringify(summaryCart));
    }
  }, [cart]);

  function handleCartOpening() {
    setOpenCart((prevState) => !prevState);
  }

  const fetchProductsFromLocalStorage = useCallback(() => {
    if (localCart.length > 0) {
      const fetchLocalCart = localCart.map(
        async (localProduct: LocalProduct) => {
          const product = await getProduct(localProduct.id);

          const productWithQuantity = {
            ...product,
            quantityInCart: localProduct.quantityInCart,
          } as ProductCart;

          return productWithQuantity;
        },
      );

      Promise.all(fetchLocalCart)
        .then((products) => setCart(products))
        .catch(() => setCart([]));
    }
  }, [localCart]);

  function addProductToCart(product: Product, quantity: number = 1) {
    const existingProduct = cart.find((p) => p.id === product.id);
    handleCartOpening();

    if (existingProduct) {
      return addProductQuantity(existingProduct, quantity);
    }

    setCart((prevState) => [
      ...prevState,
      { quantityInCart: quantity, ...product },
    ]);
  }

  function deleteProductToCart(product: Product) {
    return setCart((prevState) =>
      prevState.filter((item) => item.id !== product.id),
    );
  }

  function calculateCartTotal() {
    return cart.reduce((price, product) => {
      if (product.promotionalPrice) {
        return price + product.promotionalPrice * product.quantityInCart;
      } else {
        return price + product.price * product.quantityInCart;
      }
    }, 0);
  }

  function addProductQuantity(product: ProductCart, quantity?: number) {
    const changeQuantity = quantity
      ? product.quantityInCart + quantity
      : product.quantityInCart + 1;

    setCart((prevState) =>
      prevState.map((p) =>
        p.id === product.id
          ? { ...product, quantityInCart: changeQuantity }
          : p,
      ),
    );
  }

  function subtractProductQuantity(product: ProductCart) {
    if (product.quantityInCart === 1) {
      return;
    }

    setCart((prevState) =>
      prevState.map((p) =>
        p.id === product.id
          ? { ...product, quantityInCart: product.quantityInCart - 1 }
          : p,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        deleteProductToCart,
        calculateCartTotal,
        addProductQuantity,
        subtractProductQuantity,
        openCart,
        setOpenCart,
        handleCartOpening,
        fetchProductsFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
