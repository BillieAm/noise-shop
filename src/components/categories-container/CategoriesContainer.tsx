import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import { CategoriesWrapper } from "./categoriesContainer.styles";

import CategoryItem from "../category-item/CategoryItem";

function CategoriesContainer(): JSX.Element {
  const categories = useContext(CategoriesContext);

  return (
    <CategoriesWrapper>
      {categories.map(category => (
        <CategoryItem key={category.title} category={category} />
      ))}
    </CategoriesWrapper>
  );
}

export default CategoriesContainer;
