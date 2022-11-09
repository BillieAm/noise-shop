import { Category } from "../../types/shop";

export default function randomItems(arr: Category[]) {
  return arr.map(item => {
    const randIdx: number = Math.floor(Math.random() * item.items.length);
    return item.items[randIdx];
  });
}
