import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryProductItem from "../category-product-item/CategoryProductItem";
import PageHeader from "../page-header/PageHeader";

import { ProductsGridWrapper } from "./categoryProducts.styles";

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

      <ProductsGridWrapper>
        {currentCategory &&
          currentCategory.items.map((item: IProduct) => (
            <CategoryProductItem key={item.id} product={item} />
          ))}
      </ProductsGridWrapper>
    </>
  );
}

export default CategoryProducts;
