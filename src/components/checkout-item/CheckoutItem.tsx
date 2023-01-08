import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/CartItem";

import { StyledCartItem } from "./checkoutItem.styles";

import { CartContextType, ICartItem } from "../../types/shop";

interface CheckoutItemProps {
  item: ICartItem;
}

function CheckoutItem({ item }: CheckoutItemProps): JSX.Element {
  const { addItemToCart, subtractCartItem, removeItemFromCheckout } =
    useContext(CartContext) as CartContextType;

  const incrementHandler = () => {
    addItemToCart(item);
  };
  const decrementHandler = () => {
    subtractCartItem(item);
  };
  const removeHandler = () => {
    removeItemFromCheckout(item);
  };

  return (
    <StyledCartItem>
      <p onClick={removeHandler}>&#10005;</p>
      <CartItem key={item.id} item={item} />
      <div>
        <span onClick={incrementHandler}>+</span>
        <span>{item.quantity}</span>
        <span onClick={decrementHandler}>-</span>
      </div>
    </StyledCartItem>
  );
}

export default CheckoutItem;
