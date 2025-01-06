import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Product } from "@/types/product";
import { getProduct } from "@/api/queries/products";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContext {
  cart: ProductCart[];
  isLoading: boolean;
  addProductToCart: (product: Product, quantity?: number) => void;
  deleteProductToCart: (product: Product) => void;
  calculateCartTotal: () => number;
  addProductQuantity: (product: ProductCart, quantity?: number) => void;
  subtractProductQuantity: (product: ProductCart) => void;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  handleCartOpening: () => void;
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  fetchProductsFromLocalStorage: () => void;
  handleResetCart: () => void;
}

export interface ProductCart extends Product {
  quantityInCart: number;
}

interface LocalProduct {
  id: string;
  quantityInCart: number;
}

export const CartContext = createContext<CartContext>(null as any);

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openCart, setOpenCart] = useState<boolean>(false);

  function handleResetCart() {
    localStorage.removeItem("cart");
  }

  function handleCartOpening() {
    setOpenCart((prevState) => !prevState);
  }

  function handleOpenCart() {
    setOpenCart(true);
  }

  function handleCloseCart() {
    setOpenCart(false);
  }

  function getLocalCart() {
    const localCart = localStorage.getItem("cart");

    try {
      const data = localCart ? JSON.parse(localCart) : [];

      const validateProperty = data.every(
        (obj: LocalProduct) =>
          typeof obj.id === "string" && typeof obj.quantityInCart === "number",
      );

      return validateProperty ? data : localStorage.removeItem("cart");
    } catch {
      return localStorage.removeItem("cart");
    }
  }

  function addLocalCart(item: LocalProduct[]) {
    localStorage.setItem("cart", JSON.stringify(item));
  }

  const fetchProductsFromLocalStorage = useCallback(() => {
    const getCart = getLocalCart();

    const fetchLocalCart = getCart?.map(async (localProduct: LocalProduct) => {
      const product = await getProduct(localProduct.id);

      if (product.isSuccess) {
        const productWithQuantity = {
          ...product.data,
          quantityInCart: localProduct.quantityInCart,
        };

        return productWithQuantity;
      }
    });

    Promise.all(fetchLocalCart)
      .then((products) => products.filter((p: ProductCart) => p))
      .then((products) => setCart(products))
      .then(() => setIsLoading(false))
      .catch(() => setCart([]));
  }, []);

  function addProductToCart(product: Product, quantity: number = 1) {
    const existingProduct = cart.find((p) => p.id === product.id);
    handleOpenCart();

    if (existingProduct) {
      return addProductQuantity(existingProduct, quantity);
    }

    setCart((prevState) => [
      ...prevState,
      { quantityInCart: quantity, ...product },
    ]);

    addLocalCart([
      ...getLocalCart(),
      { id: product.id, quantityInCart: quantity || 1 },
    ]);
  }

  function deleteProductToCart(product: Product) {
    const newLocalCart = getLocalCart().filter(
      (p: LocalProduct) => p.id !== product.id,
    );
    addLocalCart(newLocalCart);

    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  }

  function calculateCartTotal() {
    const value = cart.reduce((price, product) => {
      if (product.promotionalPrice) {
        return price + product.promotionalPrice * product.quantityInCart;
      } else {
        return price + product.price * product.quantityInCart;
      }
    }, 0);

    return Number(value.toFixed(2));
  }

  function addProductQuantity(product: ProductCart, quantity?: number) {
    const changeQuantity = quantity
      ? product.quantityInCart + quantity
      : product.quantityInCart + 1;

    const newLocalCart = getLocalCart().map((p: LocalProduct) =>
      p.id === product.id ? { ...p, quantityInCart: changeQuantity } : p,
    );
    addLocalCart(newLocalCart);

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

    const newLocalCart = getLocalCart().map((p: LocalProduct) =>
      p.id === product.id
        ? { ...p, quantityInCart: product.quantityInCart - 1 }
        : p,
    );
    addLocalCart(newLocalCart);

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
        isLoading,
        addProductToCart,
        deleteProductToCart,
        calculateCartTotal,
        addProductQuantity,
        subtractProductQuantity,
        openCart,
        setOpenCart,
        handleCartOpening,
        handleOpenCart,
        handleCloseCart,
        fetchProductsFromLocalStorage,
        handleResetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
