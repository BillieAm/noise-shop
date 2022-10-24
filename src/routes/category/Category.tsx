import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

function Category(): JSX.Element {
  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Category;
