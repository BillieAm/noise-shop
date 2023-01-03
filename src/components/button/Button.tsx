import React from "react";

import {
  BasicButton,
  AddButton,
  InfoButton,
  FormButton
} from "./button.styles";

type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  onClick?: React.MouseEventHandler;
};

export enum BUTTON_TYPE_CLASSES {
  basic,
  add,
  info,
  form
}

const getButton = (btnType = BUTTON_TYPE_CLASSES.basic) => {
  return {
    [BUTTON_TYPE_CLASSES.basic]: BasicButton,
    [BUTTON_TYPE_CLASSES.add]: AddButton,
    [BUTTON_TYPE_CLASSES.info]: InfoButton,
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
