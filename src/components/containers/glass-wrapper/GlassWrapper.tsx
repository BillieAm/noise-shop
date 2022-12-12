import React from "react";

import { Glass, GlassDetailsBox } from "./glassWrapper.styles";

type GlassType = "base" | "details" | undefined;

type GlassProps = {
  children: React.ReactNode;
  glassType?: GlassType;
};

const getGlassType = (type: GlassType) => {
  switch (type) {
    case "base":
      return Glass;
    case "details":
      return GlassDetailsBox;
    default:
      return Glass;
  }
};

function GlassWrapper({ children, glassType }: GlassProps): JSX.Element {
  const CustomGlass = getGlassType(glassType);
  return <CustomGlass>{children}</CustomGlass>;
}

export default GlassWrapper;
