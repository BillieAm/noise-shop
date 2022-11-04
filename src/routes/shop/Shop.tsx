import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";

function Shop(): JSX.Element {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
}

export default Shop;
