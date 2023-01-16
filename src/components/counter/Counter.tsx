import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { StyledFontAwesomeIcon } from "./counter.styles";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
      <StyledFontAwesomeIcon icon={faMinus} onClick={decrementHandler} />
      <span>{item.quantity}</span>
      <StyledFontAwesomeIcon icon={faPlus} onClick={incrementHandler} />
    </StyledCounter>
  );
}

export default Counter;
