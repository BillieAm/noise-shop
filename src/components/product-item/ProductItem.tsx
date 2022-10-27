import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/Button";

import { IProduct, CartContextType } from "../../types/shop";

type ProductProps = {
  key: number;
  product: IProduct;
};

function ProductItem({ product }: ProductProps): JSX.Element {
  const { name, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext) as CartContextType;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <Button onClick={addProductToCart}>Add</Button>
    </div>
  );
}

export default ProductItem;