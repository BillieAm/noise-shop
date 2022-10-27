import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
