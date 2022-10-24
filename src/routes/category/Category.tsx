import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductItem from "../../components/product-item/ProductItem";

function Category(): JSX.Element {
  const products = useContext(ProductsContext);

  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Category;
