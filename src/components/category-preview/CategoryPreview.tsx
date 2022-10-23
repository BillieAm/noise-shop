import GlassWrapper from "../glass-wrapper/GlassWrapper";

interface categoryProps {
  category: { id: number; name: string; imageUrl: string };
}

function CategoryPreview({ category }: categoryProps): JSX.Element {
  return (
    <GlassWrapper>
      <img src={category.imageUrl} alt={category.name} />
    </GlassWrapper>
  );
}

export default CategoryPreview;
