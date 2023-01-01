import React, { ReactNode } from "react";

import { MainGlass } from "./glassMain.styles";

function GlassMain({ children }: { children: ReactNode }) {
  return <MainGlass>{children}</MainGlass>;
}

export default GlassMain;
