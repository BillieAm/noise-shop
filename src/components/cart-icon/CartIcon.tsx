import { useState, useContext, useRef, useEffect } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartContextType } from "../../types/shop";

import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { StyledFontAwesomeIcon } from "./cartIcon.styles";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {
  StyledCartIconContainer,
  StyledCartIconCounter
} from "./cartIcon.styles";

function CartIcon(): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  const closeCartDropdown = () => setIsCartOpen(false);

  const handleClickOutside = (event: Event) => {
    if (!dropdownRef.current?.contains(event.target as HTMLDivElement)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const cartItemsCounter = cartItems.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);

  return (
    <StyledCartIconContainer ref={dropdownRef}>
      <StyledFontAwesomeIcon
        icon={faCartShopping}
        onClick={toggleCartDropdown}
      />
      <StyledCartIconCounter>{cartItemsCounter}</StyledCartIconCounter>
      {isCartOpen && <CartDropdown close={closeCartDropdown} />}
    </StyledCartIconContainer>
  );
}

export default CartIcon;
