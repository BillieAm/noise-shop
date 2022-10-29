import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartContextType } from "../../types/shop";

import CheckoutItem from "../checkout-item/CheckoutItem";

function CheckoutItems(): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;

  return (
    <div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      Total:
      {`$${cartItems.reduce(
        (acc, item) => item.price * item.quantity + acc,
        0
      )}`}
    </div>
  );
}

export default CheckoutItems;
