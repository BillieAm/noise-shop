import { Link } from "react-router-dom";

import GlassWrapper from "../containers/glass-wrapper/GlassWrapper";

import { Category } from "../../types/shop";

function CategoryItem({ category }: { category: Category }): JSX.Element {
  return (
    <Link to={category.title}>
      <GlassWrapper>
        <h2>{category.title}</h2>
        <img src={category.image} alt="category" />
      </GlassWrapper>
    </Link>
  );
}

export default CategoryItem;
