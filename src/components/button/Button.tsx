import React from "react";

function Button({ children }: { children: React.ReactNode }): JSX.Element {
  return <button>{children}</button>;
}

export default Button;
