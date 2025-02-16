import type { ProductInCart } from '@/@types';
import { createContext, useContext, useMemo, useState } from 'react';

// 1. Typer le Provider
type CartContextProviderProps = {
  children: React.ReactNode;
};

// 2. Typer le contexte
type CartContextType = {
  cartProducts: ProductInCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductInCart[]>([]);
  const contextValues = useMemo(() => {
    return { cartProducts, setCartProducts };
  }, [cartProducts]);

  // ? React 19 ? <CartContext value={contextValues}>
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  // ? React 19 ? const context = use(CartContext);
  const context = useContext(CartContext);

  if (!context) {
    //type: null
    throw new Error(
      'useCartContext doit être utilisé dans CartContextProvider',
    );
  }

  return context;
}
