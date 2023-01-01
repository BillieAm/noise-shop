import styled from "styled-components/macro";
import { SIZES } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";

export const StyledHeader = styled.div`
  font-family: "Chango", cursive;
  position: absolute;
  top: -${SIZES.smallRel};

  ${Glass} {
    background-color: rgba(255, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    padding: ${SIZES.regularRel} ${SIZES.regularRel} 0;
    border-radius: ${SIZES.xSmallFix};
  }
`;
