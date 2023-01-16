import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

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
  const { removeItemFromCheckout } = useContext(CartContext) as CartContextType;

  const removeHandler = () => {
    removeItemFromCheckout(item);
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
