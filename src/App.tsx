import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import CategoriesContainer from "./components/categories-container/CategoriesContainer";
import Footer from "./components/footer/Footer";

function App(): JSX.Element {
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

  return (
    <div className="App">
      <Header />
      <CategoriesContainer categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
