import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductItem from "../product-item/ProductItem";
import PageHeader from "../page-header/PageHeader";

import { Category, IProduct } from "../../types/shop";

function CategoryProducts(): JSX.Element {
  const categories = useContext(CategoriesContext);
  const { category } = useParams();

  const currentCategory = categories.find(
    (categoryObj: Category) => categoryObj.title === category
  );
  console.log(currentCategory);

  return (
    <>
      <PageHeader>{currentCategory?.title}</PageHeader>

      <div>
        {currentCategory &&
          currentCategory.items.map((item: IProduct) => (
            <ProductItem key={item.id} product={item} />
          ))}
      </div>
    </>
  );
}

export default CategoryProducts;
