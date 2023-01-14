import { useContext } from "react";
import { useLocation } from "react-router-dom";

import PageHeader from "../page-header/PageHeader";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import { CartContext } from "../../contexts/cart.context";
import { CartContextType } from "../../types/shop";

import {
  GlassWrapper,
  ProductImage,
  ProductContent,
  ContentHeadings,
  ContentBody,
  ContentFooter
} from "./product.styles";

function Product() {
  const { addItemToCart } = useContext(CartContext) as CartContextType;
  const location = useLocation();
  const productData = location.state;
  console.log(productData);

  const addProductToCart = () => {
    addItemToCart(productData);
  };

  return (
    <>
      <PageHeader>{productData.category}</PageHeader>

      <GlassWrapper>
        <ProductImage>
          <img src={productData.imageUrl} alt={productData.name} />
        </ProductImage>
        <ProductContent>
          <ContentHeadings>
            <h2>{productData.name}</h2>
            <h3>{productData.subtitle}</h3>
          </ContentHeadings>
          <ContentBody>{productData.description}</ContentBody>
          <ContentFooter>
            <p>Price: ${productData.price}</p>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.add}
              onClick={addProductToCart}
            >
              Add to cart
            </Button>
          </ContentFooter>
        </ProductContent>
      </GlassWrapper>
    </>
  );
}

export default Product;
