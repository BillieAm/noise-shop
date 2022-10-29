import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { CartContextType } from "../../types/shop";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

function CartDropdown(): JSX.Element {
  const { cartItems } = useContext(CartContext) as CartContextType;
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div>
      {cartItems.length
        ? cartItems.map(item => <CartItem key={item.id} item={item} />)
        : "empty"}
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
}

export default CartDropdown;
