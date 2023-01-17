import { IProduct, ICartItem } from "../types/shop";

/* Helpers */

const addCartItem = (
  cartItemsArr: ICartItem[],
  product: IProduct | ICartItem
) => {
  const existsItem = cartItemsArr.find(item => item.id === product.id);

  if (existsItem) {
    return cartItemsArr.map(item =>
      item.id === existsItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItemsArr, { ...product, quantity: 1 }];
};

const subtractQuantity = (cartItemsArr: ICartItem[], cartItem: ICartItem) => {
  if (cartItem.quantity > 1) {
    return cartItemsArr.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }

  return cartItemsArr;
};

const removeCartItem = (cartItemsArr: ICartItem[], cartItem: ICartItem) => {
  return cartItemsArr.filter(item => item.id !== cartItem.id);
};

/* Reducer */

export enum REDUCER_ACTION_TYPE {
  ADD,
  SUBTRACT,
  REMOVE
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  item: IProduct | ICartItem;
};

const reducer = (state: ICartItem[], action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      return addCartItem(state, action.item);
    case REDUCER_ACTION_TYPE.SUBTRACT:
      return subtractQuantity(state, action.item as ICartItem);
    case REDUCER_ACTION_TYPE.REMOVE:
      return removeCartItem(state, action.item as ICartItem);
    default:
      throw new Error();
  }
};

export default reducer;
