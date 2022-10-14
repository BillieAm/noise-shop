import React from "react";

interface cat {
  category: { id: number; name: string; imageUrl: string };
}

function Category({ category }: cat): JSX.Element {
  return <div>{category.name}</div>;
}

export default Category;
