import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductItem from "../product-item/ProductItem";

function ProductsContainer(): JSX.Element {
  const products = useContext(ProductsContext);

  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
