export interface IProduct {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
}
export interface ICartItem extends IProduct {
  quantity: number;
}

type Category = {
  title: string;
  items: IProduct[];
  image: string;
};

export type CategoryContextType = Category[];

export type CartContextType = {
  cartItems: ICartItem[];
  addItemToCart(productToAdd: IProduct | ICartItem): void;
  subtractCartItem(cartItem: ICartItem): void;
  removeItemFromCheckout(cartItemToRemove: ICartItem): void;
};

type CurrentUser = {
  displayName: string;
};

export type UserContextType = {
  currentUser: CurrentUser | null;
  setCurrentUser(user: User): void;
};

/* 
{id: 3, name: "abc", imageUrl: "hello", price: 34, category: "bundles", quantity: 2}
*/
