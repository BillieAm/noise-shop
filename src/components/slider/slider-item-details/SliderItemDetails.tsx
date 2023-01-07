import { useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../../button/Button";
import GlassContainer from "../../containers/glass-container/GlassContainer";

import pathBeautifier from "../../../utils/path-beautifier/pathBeautifier";

import { ItemSubtitle } from "./sliderItemDetails.styles";

import { IProduct } from "../../../types/shop";

function SliderItemDetails({ item }: { item: IProduct }): JSX.Element {
  const navigate = useNavigate();

  const goToProductHandler = () => {
    navigate(`/shop/${item.category}/${pathBeautifier(item.name)}`, {
      state: item
    });
  };

  return (
    <GlassContainer glassType="details">
      <h3>{item.name}</h3>
      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.info}
        onClick={goToProductHandler}
      >
        learn more
      </Button>
    </GlassContainer>
  );
}

export default SliderItemDetails;
