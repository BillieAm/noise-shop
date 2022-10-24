import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ProductsProvider } from "./contexts/products.context";

import GlobalStyle from "./index.styles";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
