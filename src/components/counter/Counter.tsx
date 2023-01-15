import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartContextType, ICartItem } from "../../types/shop";

interface CheckoutItemProps {
  item: ICartItem;
}

function Counter({ item }: CheckoutItemProps) {
  const { addItemToCart, subtractCartItem } = useContext(
    CartContext
  ) as CartContextType;

  const incrementHandler = () => {
    addItemToCart(item);
  };
  const decrementHandler = () => {
    subtractCartItem(item);
  };

  return (
    <div>
      <span onClick={incrementHandler}>+</span>
      <span>{item.quantity}</span>
      <span onClick={decrementHandler}>-</span>
    </div>
  );
}

export default Counter;
