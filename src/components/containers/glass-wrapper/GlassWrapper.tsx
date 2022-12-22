import React from "react";

import { Glass, GlassMain, GlassDetailsBox } from "./glassWrapper.styles";

type GlassType = "base" | "main" | "details" | undefined;

type GlassProps = {
  children: React.ReactNode;
  glassType?: GlassType;
};

const getGlassType = (type: GlassType) => {
  switch (type) {
    case "base":
      return Glass;
    case "main":
      return GlassMain;
    case "details":
      return GlassDetailsBox;
    default:
      return GlassMain;
  }
};

function GlassWrapper({ children, glassType }: GlassProps): JSX.Element {
  const CustomGlass = getGlassType(glassType);
  return <CustomGlass>{children}</CustomGlass>;
}

export default GlassWrapper;
