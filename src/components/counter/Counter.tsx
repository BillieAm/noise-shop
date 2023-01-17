import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { REDUCER_ACTION_TYPE } from "../../reducers/cart.reducer";

import { StyledFontAwesomeIcon } from "./counter.styles";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { StyledCounter } from "./counter.styles";

import { CartContextType, ICartItem } from "../../types/shop";

interface CheckoutItemProps {
  item: ICartItem;
}

function Counter({ item }: CheckoutItemProps) {
  const { dispatch } = useContext(CartContext) as CartContextType;

  const incrementHandler = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD, item });
  };
  const decrementHandler = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.SUBTRACT, item });
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
