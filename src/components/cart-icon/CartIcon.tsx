import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartIcon(): JSX.Element {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>0</span>
    </div>
  );
}

export default CartIcon;
