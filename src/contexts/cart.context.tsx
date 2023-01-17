import React, { createContext, useReducer } from "react";

import cartReducer from "../reducers/cart.reducer";

import { CartContextType, ICartItem } from "../types/shop";

const CartContext = createContext<CartContextType | null>(null);

const initState: ICartItem[] = [];

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initState);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
