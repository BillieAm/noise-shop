import React from "react";

import { Glass } from "./glassContainer.styles";

function GlassContainer({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Glass>{children}</Glass>;
}

export default GlassContainer;
