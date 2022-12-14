import React from "react";
import { Dot } from "./sliderDot.styles";

type SliderDotProps = {
  onClick: React.MouseEventHandler;
};

function SliderDot({ onClick }: SliderDotProps): JSX.Element {
  return <Dot onClick={onClick}>●</Dot>;
}

export default SliderDot;
