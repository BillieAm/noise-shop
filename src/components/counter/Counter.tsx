import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { StyledCounter } from "./counter.styles";

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
    <StyledCounter>
      <FontAwesomeIcon icon={faAngleLeft} onClick={incrementHandler} />
      <span>{item.quantity}</span>
      <FontAwesomeIcon icon={faAngleRight} onClick={decrementHandler} />
    </StyledCounter>
  );
}

export default Counter;
