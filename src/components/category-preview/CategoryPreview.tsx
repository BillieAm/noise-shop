import { Link } from "react-router-dom";
import GlassWrapper from "../glass-wrapper/GlassWrapper";

interface categoryProps {
  category: { id: number; name: string; imageUrl: string };
}

function CategoryPreview({ category }: categoryProps): JSX.Element {
  return (
    <Link to={category.name}>
      <GlassWrapper>
        <h2>{category.name}</h2>
        <img src={category.imageUrl} alt={category.name} />
      </GlassWrapper>
    </Link>
  );
}

export default CategoryPreview;
