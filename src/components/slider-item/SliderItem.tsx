import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import { IProduct } from "../../types/shop";

function SliderItem({ slideItem }: { slideItem: IProduct }): JSX.Element {
  return (
    <div>
      <h2>{slideItem.name}</h2>
      <img src={slideItem.imageUrl} alt={slideItem.name} />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.buy}
        onClick={() => console.log("clicked")}
      >
        Learn More
      </Button>
    </div>
  );
}

export default SliderItem;
