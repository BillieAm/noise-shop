import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import {
  CardGlass,
  Card,
  CardImg,
  CardInfo,
  Price
} from "./categoryProductItem.styles";

import { IProduct, CartContextType } from "../../types/shop";

function CategoryProductItem({ product }: { product: IProduct }): JSX.Element {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext) as CartContextType;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <CardGlass>
      <Card>
        <CardImg src={imageUrl} alt={name} />
        <CardInfo>
          <h4>{name}</h4>
          <Price>${price}</Price>
        </CardInfo>
        <Button buttonType={BUTTON_TYPE_CLASSES.add} onClick={addProductToCart}>
          Add to cart
        </Button>
      </Card>
    </CardGlass>
  );
}

export default CategoryProductItem;
