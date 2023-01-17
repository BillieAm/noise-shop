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
  dispatch: React.Dispatch<ReducerAction>;
};

type CurrentUser = {
  displayName: string;
};

export type UserContextType = {
  currentUser: CurrentUser | null;
  setCurrentUser(user: User): void;
};
