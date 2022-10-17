import Category from "../category-item/CategoryItem";
import GlassWrapper from "../glass-wrapper/GlassWrapper";

import effects from "../../assets/categories/effects.png";
import instruments from "../../assets/categories/instruments.png";
import bundles from "../../assets/categories/bundles.png";

function CategoriesContainer(): JSX.Element {
  const categories = [
    {
      id: 1,
      name: "Effects",
      imageUrl: effects
    },
    {
      id: 2,
      name: "Instruments",
      imageUrl: instruments
    },
    {
      id: 3,
      name: "Bundles",
      imageUrl: bundles
    }
  ];

  return (
    <div>
      <GlassWrapper>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </GlassWrapper>
    </div>
  );
}

export default CategoriesContainer;
