import React from "react";

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
      <img src={`../../${imageUrl}`} alt={name} />
    </div>
  );
}

export default ProductItem;
