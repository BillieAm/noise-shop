import SliderItemDetails from "../slider-item-details/SliderItemDetails";

import { MobileItem, DesktopItem } from "./sliderItem.styles";

import { IProduct } from "../../../types/shop";

type Devise = "small" | "large";

type SliderProps = { item: IProduct; devise: Devise };

const getItem = (type: Devise) => {
  return type === "small" ? MobileItem : DesktopItem;
};

function SliderItem({ item, devise }: SliderProps): JSX.Element {
  const CustomItem = getItem(devise);
  return (
    <CustomItem>
      <img src={item.imageUrl} alt={item.name} />
      <SliderItemDetails item={item} />
    </CustomItem>
  );
}

export default SliderItem;
