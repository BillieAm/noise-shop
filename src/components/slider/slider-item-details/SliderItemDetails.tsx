import Button, { BUTTON_TYPE_CLASSES } from "../../button/Button";
import GlassWrapper from "../../containers/glass-wrapper/GlassWrapper";

import { ItemSubtitle } from "./sliderItemDetails.styles";

import { IProduct } from "../../../types/shop";

function SliderItemDetails({ item }: { item: IProduct }): JSX.Element {
  return (
    <GlassWrapper glassType="details">
      <h3>{item.name}</h3>
      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={() => console.log("clicked")}
      >
        learn more
      </Button>
    </GlassWrapper>
  );
}

export default SliderItemDetails;
