import React from "react";
import Category from "../category-item/CategoryItem";

function CategoriesContainer(): JSX.Element {
  const categories = [
    {
      id: 1,
      name: "Effects",
      imageUrl: ""
    },
    {
      id: 2,
      name: "Instruments",
      imageUrl: ""
    },
    {
      id: 3,
      name: "Bundles",
      imageUrl: ""
    }
  ];

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
