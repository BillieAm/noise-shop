import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { CartContextType } from "../../types/shop";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

import { Dropdown, StyledWhiteGlass } from "./cartDropdown.styles";

function CartDropdown({ close }: { close: () => void }): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/cart");
    close();
  };

  return (
    <Dropdown>
      <StyledWhiteGlass>
        {cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : "Your cart is empty"}
        <hr />
        <p>
          {`Total:
          $${cartItems.reduce(
            (acc, item) => item.price * item.quantity + acc,
            0
          )}`}
        </p>
        <Button onClick={goToCheckoutHandler}>Go to cart</Button>
      </StyledWhiteGlass>
    </Dropdown>
  );
}

export default CartDropdown;
