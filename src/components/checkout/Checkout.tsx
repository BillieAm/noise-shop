import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartContextType } from "../../types/shop";

import Button from "../button/Button";
import CheckoutItem from "../checkout-item/CheckoutItem";
import { StyledCartGlass, StyledCartSummary } from "./checkout.styles";

function Checkout(): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;

  return (
    <StyledCartGlass>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <hr />
      <StyledCartSummary>
        <span>
          {`Total:
          $${cartItems.reduce(
            (acc, item) => item.price * item.quantity + acc,
            0
          )}`}
        </span>
        <Button>Checkout</Button>
      </StyledCartSummary>
    </StyledCartGlass>
  );
}

export default Checkout;
