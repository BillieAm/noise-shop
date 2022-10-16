import React from "react";

import { Glass } from "./glassContainer.styles";

type childrenProps = {
  children: React.ReactChild;
};

function GlassContainer({ children }: childrenProps): JSX.Element {
  return <Glass>{children}</Glass>;
}

export default GlassContainer;
