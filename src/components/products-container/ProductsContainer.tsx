import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductItem from "../product-item/ProductItem";

import { Category, IProduct } from "../../types/shop";

function ProductsContainer(): JSX.Element {
  const categories = useContext(CategoriesContext);
  const { category } = useParams();

  const currentCategory = categories.find(
    (categoryObj: Category) => categoryObj.title === category
  );

  return (
    <div>
      {currentCategory &&
        currentCategory.items.map((item: IProduct) => (
          <ProductItem key={item.id} product={item} />
        ))}
    </div>
  );
}

export default ProductsContainer;
