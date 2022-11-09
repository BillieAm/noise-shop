import React from "react";

type SliderDotProps = {
  onClick: React.MouseEventHandler;
};

function SliderDot({ onClick }: SliderDotProps): JSX.Element {
  return <div onClick={onClick}>●</div>;
}

export default SliderDot;
