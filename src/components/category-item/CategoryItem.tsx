import {
  CategoryLink,
  GlassWrapper,
  StyledCategoryItem
} from "./categoryItem.styles";

import { Category } from "../../types/shop";

function CategoryItem({ category }: { category: Category }): JSX.Element {
  return (
    <CategoryLink to={category.title}>
      <GlassWrapper>
        <StyledCategoryItem categoryImg={category.image}></StyledCategoryItem>
        <h3>{category.title}</h3>
      </GlassWrapper>
    </CategoryLink>
  );
}

export default CategoryItem;
