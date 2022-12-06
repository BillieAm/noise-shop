import React from "react";

import { Glass } from "./glassWrapper.styles";

type GlassProps = {
  children: React.ReactNode;
};

function GlassWrapper({ children }: GlassProps): JSX.Element {
  return <Glass>{children}</Glass>;
}

export default GlassWrapper;
