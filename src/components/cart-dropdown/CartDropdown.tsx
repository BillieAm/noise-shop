import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartContextType } from "../../types/shop";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

function CartDropdown(): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;

  return (
    <div>
      {cartItems.length
        ? cartItems.map(item => <CartItem key={item.id} item={item} />)
        : "empty"}
      <Button>Checkout</Button>
    </div>
  );
}

export default CartDropdown;
