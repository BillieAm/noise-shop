import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import {
  CardGlass,
  Card,
  CardImg,
  CardInfo,
  Price
} from "./productCard.styles";

import { IProduct, CartContextType } from "../../types/shop";
import pathBeautifier from "../../utils/path-beautifier/pathBeautifier";

function ProductCard({ product }: { product: IProduct }): JSX.Element {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext) as CartContextType;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <CardGlass>
      <Card>
        <Link to={pathBeautifier(name)} state={product}>
          <CardImg src={imageUrl} alt={name} />
          <CardInfo>
            <h4>{name}</h4>
            <Price>${price}</Price>
          </CardInfo>
        </Link>
        <Button buttonType={BUTTON_TYPE_CLASSES.add} onClick={addProductToCart}>
          Add to cart
        </Button>
      </Card>
    </CardGlass>
  );
}

export default ProductCard;
