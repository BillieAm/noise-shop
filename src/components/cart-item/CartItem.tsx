import { ICartItem } from "../../types/shop";

interface CartItemProps {
  item: ICartItem;
}

function CartItem({ item }: CartItemProps): JSX.Element {
  return (
    <div>
      <h2>{item.id}</h2>
      <span>{item.quantity}</span>
    </div>
  );
}

export default CartItem;
