import Button, { BUTTON_TYPE_CLASSES } from "../../button/Button";
import GlassContainer from "../../containers/glass-container/GlassContainer";

import { ItemSubtitle } from "./sliderItemDetails.styles";

import { IProduct } from "../../../types/shop";

function SliderItemDetails({ item }: { item: IProduct }): JSX.Element {
  return (
    <GlassContainer glassType="details">
      <h3>{item.name}</h3>
      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.info}
        onClick={() => console.log("clicked")}
      >
        learn more
      </Button>
    </GlassContainer>
  );
}

export default SliderItemDetails;
