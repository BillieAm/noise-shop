import { IProduct } from "../../types/shop";

function SliderItem({ slideItem }: { slideItem: IProduct }): JSX.Element {
  return (
    <div>
      <h2>{slideItem.name}</h2>
      <img src={slideItem.imageUrl} alt={slideItem.name} />
    </div>
  );
}

export default SliderItem;
