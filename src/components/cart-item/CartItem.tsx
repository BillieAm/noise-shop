import { StyledItem, StyledImage, StyledItemInfo } from "./cartItem.styles";

import { ICartItem } from "../../types/shop";

interface CartItemProps {
  item: ICartItem;
}

function CartItem({ item }: CartItemProps): JSX.Element {
  return (
    <StyledItem>
      <StyledImage src={item.imageUrl} alt={item.name} />
      <StyledItemInfo>
        <h4>{item.name}</h4>
        <p>
          ${item.price} &#215; {item.quantity}
        </p>
      </StyledItemInfo>
    </StyledItem>
  );
}

export default CartItem;
