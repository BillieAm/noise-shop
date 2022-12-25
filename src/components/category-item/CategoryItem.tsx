import { Link } from "react-router-dom";

import { CategoryLink, BackgroundImag } from "./categoryItem.styles";

import { Category } from "../../types/shop";

function CategoryItem({ category }: { category: Category }): JSX.Element {
  return (
    <CategoryLink to={category.title}>
      <BackgroundImag categoryImg={category.image}>
        <h2>{category.title}</h2>
      </BackgroundImag>
    </CategoryLink>
  );
}

export default CategoryItem;
