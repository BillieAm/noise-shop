import { Link } from "react-router-dom";

import { BackgroundImag } from "./categoryItem.styles";

import { Category } from "../../types/shop";

function CategoryItem({ category }: { category: Category }): JSX.Element {
  return (
    <Link to={category.title}>
      <BackgroundImag categoryImg={category.image}>
        <h2>{category.title}</h2>
      </BackgroundImag>
    </Link>
  );
}

export default CategoryItem;
