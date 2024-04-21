import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { product } from "../(home)/types/product";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContext {
  cart: productCart[];
  addProductToCart: (product: product) => void;
  deleteProductToCart: (product: product) => void;
  calculateCartTotal: () => number;
  addProductQuantity: (product: productCart) => void;
  subtractProductQuantity: (product: productCart) => void;
  openCart: boolean;
  handleCartOpening: () => void;
  fetchProductsFromLocalStorage: () => void;
}

export const CartContext = createContext<CartContext | null>(null);

interface productCart extends product {
  quantityInCart: number;
}

interface localProduct {
  id: number;
  quantityInCart: number;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<productCart[]>([]);
  const [localCart, setLocalCart] = useState<localProduct[]>([]);
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
    document.body.style.overflow = `${openCart ? "" : "hidden"}`;
  }

  const fetchProductsFromLocalStorage = useCallback(() => {
    if (localCart.length > 0) {
      const fetchLocalCart = localCart.map(
        async (localProduct: localProduct) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${localProduct.id}`,
          );
          const data = await response.json();
          const sameProduct = localCart.find(
            (localProduct: localProduct) => localProduct.id === data.id,
          );

          return { ...data, quantityInCart: sameProduct?.quantityInCart };
        },
      );

      Promise.all(fetchLocalCart)
        .then((products) => setCart(products))
        .catch(() => setCart([]));
    }
  }, [localCart]);

  function addProductToCart(product: product) {
    const existingProduct = cart.find((p) => p.id === product.id);
    handleCartOpening();

    if (existingProduct) {
      return addProductQuantity(existingProduct);
    }

    setCart((prevState) => [...prevState, { quantityInCart: 1, ...product }]);
  }

  function deleteProductToCart(product: product) {
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

  function addProductQuantity(product: productCart) {
    if (product.quantityInCart >= product.quantityInStock) {
      return console.log(
        `O estoque deste produto é de ${product.quantityInStock}`,
      );
    }

    setCart((prevState) =>
      prevState.map((p) =>
        p.id === product.id
          ? { ...product, quantityInCart: product.quantityInCart + 1 }
          : p,
      ),
    );
  }

  function subtractProductQuantity(product: productCart) {
    if (product.quantityInCart === 1) {
      return deleteProductToCart(product);
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
        handleCartOpening,
        fetchProductsFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
