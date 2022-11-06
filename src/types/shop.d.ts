export interface IProduct {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  price: number;
}
export interface ICartItem extends IProduct {
  quantity: number;
}

export type CartContextType = {
  cartItems: ICartItem[];
  addItemToCart(productToAdd: IProduct | ICartItem): void;
  subtractCartItem(cartItem: ICartItem): void;
  removeItemFromCheckout(cartItemToRemove: ICartItem): void;
};

export type Category = {
  title: string;
  items: IProduct[];
  image: string;
};

/* 
{id: 3, name: "abc", imageUrl: "hello", price: 34, category: "bundles", quantity: 2}
*/
