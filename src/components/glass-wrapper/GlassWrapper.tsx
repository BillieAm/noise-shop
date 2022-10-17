import React from "react";

import { Glass } from "./glassWrapper.styles";

function GlassWrapper({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Glass>{children}</Glass>;
}

export default GlassWrapper;
