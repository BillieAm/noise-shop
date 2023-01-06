import { Routes, Route } from "react-router-dom";

import CategoryProducts from "../../components/category-products/CategoryProducts";
import Product from "../../components/product/Product";

function Category(): JSX.Element {
  return (
    <Routes>
      <Route index element={<CategoryProducts />} />
      <Route path=":product" element={<Product />} />
    </Routes>
  );
}

export default Category;
