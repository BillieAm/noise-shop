import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductItem from "../product-item/ProductItem";

function ProductsContainer(): JSX.Element {
  const categories = useContext(CategoriesContext);
  const { category } = useParams();

  return (
    <div>
      {/* {categories.map(category => (
        <ProductItem key={product.id} product={product} />
      ))} */}
    </div>
  );
}

export default ProductsContainer;
