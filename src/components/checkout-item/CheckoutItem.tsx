import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

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
    <div>
      <span>{item.name}</span>
      <span>{item.id}</span>
      <span>{item.quantity}</span>
      <span onClick={incrementHandler}>add</span>
      <span onClick={decrementHandler}>subtract</span>
      <span onClick={removeHandler}>&#10005;</span>
    </div>
  );
}

export default CheckoutItem;
