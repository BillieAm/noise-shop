import React from "react";

import { BaseButton, BuyButton } from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base,
  buy
}

type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  onClick?: React.MouseEventHandler;
};

const getButton = (btnType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.buy]: BuyButton
  }[btnType];
};

function Button({
  children,
  buttonType,
  ...restProps
}: ButtonProps): JSX.Element {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...restProps}>{children}</CustomButton>;
}

export default Button;
