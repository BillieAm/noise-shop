import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { REDUCER_ACTION_TYPE } from "../../reducers/cart.reducer";

import { StyledFontAwesomeIcon } from "./checkoutItem.styles";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import CartItem from "../cart-item/CartItem";
import Counter from "../counter/Counter";

import { StyledCartItem, StyledLeftSid } from "./checkoutItem.styles";

import { CartContextType, ICartItem } from "../../types/shop";

interface CheckoutItemProps {
  item: ICartItem;
}

function CheckoutItem({ item }: CheckoutItemProps): JSX.Element {
  const { dispatch } = useContext(CartContext) as CartContextType;

  const removeHandler = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE, item });
  };

  return (
    <StyledCartItem>
      <StyledLeftSid>
        <StyledFontAwesomeIcon icon={faTrash} onClick={removeHandler} />
        <CartItem key={item.id} item={item} />
      </StyledLeftSid>
      <Counter item={item} />
    </StyledCartItem>
  );
}

export default CheckoutItem;
