import { IProduct } from "../../types/shop";

function EntryDisplayItem({ product }: { product: IProduct }): JSX.Element {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}

export default EntryDisplayItem;
