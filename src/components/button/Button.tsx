import React from "react";

import { CustomButton } from "./button.styles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

function Button({ children, ...restProps }: ButtonProps): JSX.Element {
  return <CustomButton {...restProps}>{children}</CustomButton>;
}

export default Button;
