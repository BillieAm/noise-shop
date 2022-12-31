import React from "react";

import {
  Glass,
  GlassMain,
  GlassDetailsBox,
  GlassForm
} from "./glassContainer.styles";

type GlassType = "base" | "main" | "details" | "form" | undefined;

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
    case "form":
      return GlassForm;
    default:
      return GlassMain;
  }
};

function GlassContainer({ children, glassType }: GlassProps): JSX.Element {
  const CustomGlass = getGlassType(glassType);
  return <CustomGlass>{children}</CustomGlass>;
}

export default GlassContainer;
