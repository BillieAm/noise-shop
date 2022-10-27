import React, { createContext, useState } from "react";

import { CartContextType, ICartItem, IProduct } from "../types/shop";

const addCartItem = (cartItemsArr: ICartItem[], product: IProduct) => {
  const existsItem = cartItemsArr.find(item => item.id === product.id);

  if (existsItem) {
    return cartItemsArr.map(item =>
      item.id === existsItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItemsArr, { ...product, quantity: 1 }];
};

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(prevArr => addCartItem(prevArr, productToAdd));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
