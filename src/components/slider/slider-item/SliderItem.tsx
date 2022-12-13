import SliderItemDetails from "../slider-item-details/SliderItemDetails";

import { ItemWrapper } from "./sliderItem.styles";

import { IProduct } from "../../../types/shop";

function SliderItem({ item }: { item: IProduct }): JSX.Element {
  return (
    <ItemWrapper>
      <img src={item.imageUrl} alt={item.name} />
      <SliderItemDetails item={item} />
    </ItemWrapper>
  );
}

export default SliderItem;
