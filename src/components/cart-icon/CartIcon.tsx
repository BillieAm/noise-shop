import { useState, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartContextType } from "../../types/shop";

import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {
  StyledCartIconContainer,
  StyledCartIconCounter
} from "./cartIcon.styles";

function CartIcon(): JSX.Element {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext) as CartContextType;

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  const cartItemsCounter = cartItems.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);

  return (
    <StyledCartIconContainer>
      <FontAwesomeIcon icon={faCartShopping} onClick={toggleCartDropdown} />
      <StyledCartIconCounter>{cartItemsCounter}</StyledCartIconCounter>
      {isCartOpen && <CartDropdown />}
    </StyledCartIconContainer>
  );
}

export default CartIcon;
