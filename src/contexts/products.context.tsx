import React, { createContext } from "react";

import PRODUCTS from "../products-data.json";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
};

type ProductContextType = Product[];

const ProductsContext = createContext<ProductContextType | []>([]);

function ProductsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={PRODUCTS}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
