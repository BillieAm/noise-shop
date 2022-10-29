import React, { createContext, useState } from "react";

import { CartContextType, ICartItem, IProduct } from "../types/shop";

const addCartItem = (
  cartItemsArr: ICartItem[],
  product: IProduct | ICartItem
) => {
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

const subtractQuantity = (cartItemsArr: ICartItem[], cartItem: ICartItem) => {
  if (cartItem.quantity > 1) {
    return cartItemsArr.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }

  return cartItemsArr;
};

const removeCartItem = (cartItemsArr: ICartItem[], cartItem: ICartItem) => {
  return cartItemsArr.filter(item => item.id !== cartItem.id);
};

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addItemToCart = (productToAdd: IProduct | ICartItem) => {
    setCartItems(prevArr => addCartItem(prevArr, productToAdd));
  };

  const subtractCartItem = (cartItemToSubtract: ICartItem) => {
    setCartItems(prevArr => subtractQuantity(prevArr, cartItemToSubtract));
  };

  const removeItemFromCheckout = (cartItemToRemove: ICartItem) => {
    setCartItems(prevArr => removeCartItem(prevArr, cartItemToRemove));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        subtractCartItem,
        removeItemFromCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
