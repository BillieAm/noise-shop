import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/CartItem";
import Counter from "../counter/Counter";

import { StyledCartItem } from "./checkoutItem.styles";

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
      <p onClick={removeHandler}>&#10005;</p>
      <CartItem key={item.id} item={item} />
      <Counter item={item} />
    </StyledCartItem>
  );
}

export default CheckoutItem;
