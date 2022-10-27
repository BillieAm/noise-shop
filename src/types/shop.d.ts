export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}
export interface ICartItem extends IProduct {
  quantity: number;
}

export type CartContextType = {
  cartItems: ICartItem[];
  addItemToCart(productToAdd: IProduct): void;
};

/* 
{id: 3, name: "abc", imageUrl: "hello", price: 34, category: "bundles", quantity: 2}
*/
