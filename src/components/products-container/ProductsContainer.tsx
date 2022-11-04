import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import ProductItem from "../product-item/ProductItem";

function ProductsContainer(): JSX.Element {
  const categories = useContext(CategoriesContext);

  return (
    <div>
      {/* {categories.map(category => (
        <ProductItem key={product.id} product={product} />
      ))} */}
    </div>
  );
}

export default ProductsContainer;
