import React from "react";

import Button from "../button/Button";

import { IProduct } from "../../types/shop";

type ProductProps = {
  key: number;
  product: IProduct;
};

function ProductItem({ product }: ProductProps): JSX.Element {
  const { name, imageUrl } = product;

  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <Button>Add</Button>
    </div>
  );
}

export default ProductItem;
