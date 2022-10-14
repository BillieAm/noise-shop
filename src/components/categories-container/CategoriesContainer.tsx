import React from "react";
import Category from "../category-item/CategoryItem";

interface cat {
  categories: { id: number; name: string; imageUrl: string }[];
}

function CategoriesContainer({ categories }: cat): JSX.Element {
  return (
    <div>
      CategoriesContainer
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoriesContainer;
