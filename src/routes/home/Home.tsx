import React from "react";

import CategoriesContainer from "../../components/categories-container/CategoriesContainer";

function Home(): JSX.Element {
  const categories = [
    {
      id: 1,
      name: "Effects",
      imageUrl: ""
    },
    {
      id: 2,
      name: "Instruments",
      imageUrl: ""
    },
    {
      id: 3,
      name: "Bundles",
      imageUrl: ""
    }
  ];

  return <CategoriesContainer categories={categories} />;
}

export default Home;
