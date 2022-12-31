import React from "react";

import {
  BasicButton,
  BaseButton,
  BuyButton,
  FormButton
} from "./button.styles";

type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  onClick?: React.MouseEventHandler;
};

export enum BUTTON_TYPE_CLASSES {
  basic,
  base,
  buy,
  form
}

const getButton = (btnType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.basic]: BasicButton,
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.buy]: BuyButton,
    [BUTTON_TYPE_CLASSES.form]: FormButton
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
