import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

function Product() {
  const categories = useContext(CategoriesContext);
  console.log(categories);

  return <div>Product</div>;
}

export default Product;
