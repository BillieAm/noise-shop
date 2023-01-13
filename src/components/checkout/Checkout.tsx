import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { CartContextType } from "../../types/shop";

import Button from "../button/Button";
import CheckoutItem from "../checkout-item/CheckoutItem";
import {
  StyledCartGlass,
  StyledCartSummary,
  StyledEmptyCart
} from "./checkout.styles";

function Checkout(): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;

  return (
    <>
      {cartItems.length > 0 ? (
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
      ) : (
        <StyledEmptyCart>
          <p>
            Your cart is empty <br /> <Link to="/shop">Go Shopping!</Link>
          </p>
        </StyledEmptyCart>
      )}
    </>
  );
}

export default Checkout;
