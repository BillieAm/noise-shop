import React, { createContext } from "react";

import PRODUCTS from "../products-data.json";

import { ProductContextType } from "../types/shop";

const ProductsContext = createContext<ProductContextType | []>([]);

function ProductsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={PRODUCTS}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
