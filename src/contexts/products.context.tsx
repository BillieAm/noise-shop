import React, { createContext } from "react";

import PRODUCTS from "../products-data.json";

import { IProduct } from "../types/shop";

const ProductsContext = createContext<IProduct[] | []>([]);

function ProductsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={PRODUCTS}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
