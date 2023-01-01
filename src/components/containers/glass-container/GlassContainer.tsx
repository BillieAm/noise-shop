import React from "react";

import { Glass, GlassDetailsBox, GlassForm } from "./glassContainer.styles";

type GlassType = "base" | "details" | "form" | undefined;

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
    case "form":
      return GlassForm;
    default:
      return Glass;
  }
};

function GlassContainer({ children, glassType }: GlassProps): JSX.Element {
  const CustomGlass = getGlassType(glassType);
  return <CustomGlass>{children}</CustomGlass>;
}

export default GlassContainer;
