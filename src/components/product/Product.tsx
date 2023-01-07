import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

function Product() {
  const categories = useContext(CategoriesContext);
  console.log("categories in product", categories);
  const location = useLocation();
  const productData = location.state;
  console.log(productData);

  return <div>Product</div>;
}

export default Product;
