import { Outlet } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";

function Shop(): JSX.Element {
  return (
    <>
      <CategoriesPreview />
      <Outlet />
    </>
  );
}

export default Shop;
