import React from "react";

interface categoryProps {
  category: { id: number; name: string; imageUrl: string };
}

function Category({ category }: categoryProps): JSX.Element {
  return <div>{category.name}</div>;
}

export default Category;
