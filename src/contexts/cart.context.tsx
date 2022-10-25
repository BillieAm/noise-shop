import React, { createContext, useState } from "react";

import { CartContextType } from "../types/shop";

const CartContext = createContext<CartContextType | {}>({});

function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
