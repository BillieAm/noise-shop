import { ReactNode } from "react";
import GlassContainer from "../containers/glass-container/GlassContainer";
import { StyledHeader } from "./pageHeader.styles";

function PageHeader({ children }: { children: ReactNode }) {
  return (
    <StyledHeader>
      <GlassContainer>
        <h2>{children}</h2>
      </GlassContainer>
    </StyledHeader>
  );
}

export default PageHeader;
