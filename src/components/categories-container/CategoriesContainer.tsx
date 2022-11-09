import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryItem from "../category-item/CategoryItem";
import GlassWrapper from "../glass-wrapper/GlassWrapper";

function CategoriesContainer(): JSX.Element {
  const categories = useContext(CategoriesContext);

  return (
    <div>
      {categories.map(category => (
        <CategoryItem key={category.title} category={category} />
      ))}
    </div>
  );
}

export default CategoriesContainer;
