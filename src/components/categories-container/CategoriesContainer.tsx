import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryItem from "../category-item/CategoryItem";
import GlassWrapper from "../glass-wrapper/GlassWrapper";

function CategoriesContainer(): JSX.Element {
  const categories = useContext(CategoriesContext);

  return (
    <div>
      <GlassWrapper>
        {categories.map(category => (
          <CategoryItem key={category.title} category={category} />
        ))}
      </GlassWrapper>
    </div>
  );
}

export default CategoriesContainer;
