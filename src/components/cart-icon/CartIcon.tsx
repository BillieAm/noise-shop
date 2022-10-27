import { useState } from "react";

import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartIcon(): JSX.Element {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} onClick={toggleCartDropdown} />
      <span>0</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default CartIcon;
