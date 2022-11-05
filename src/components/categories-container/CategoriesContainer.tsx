import CategoryPreview from "../category-preview/CategoryPreview";
import GlassWrapper from "../glass-wrapper/GlassWrapper";

import effects from "../../assets/categories/effects.png";
import instruments from "../../assets/categories/instruments.png";
import bundles from "../../assets/categories/bundles.png";

function CategoriesContainer(): JSX.Element {
  const categories = [
    {
      id: 1,
      name: "effects",
      imageUrl: effects
    },
    {
      id: 2,
      name: "instruments",
      imageUrl: instruments
    },
    {
      id: 3,
      name: "bundles",
      imageUrl: bundles
    }
  ];

  return (
    <div>
      <GlassWrapper>
        {categories.map(category => (
          <CategoryPreview key={category.id} category={category} />
        ))}
      </GlassWrapper>
    </div>
  );
}

export default CategoriesContainer;
