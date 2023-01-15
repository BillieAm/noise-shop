import styled from "styled-components/macro";
import { DEVICES, SIZES } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";

export const StyledHeader = styled.div`
  font-family: "Chango", cursive;
  font-size: ${SIZES.smallFix};
  text-transform: capitalize;
  position: absolute;
  top: -${SIZES.smallRel};

  @media ${DEVICES.tablet} {
    font-size: ${SIZES.regularRel};
  }

  ${Glass} {
    background-color: rgba(255, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    padding: ${SIZES.regularRel} ${SIZES.regularRel} 0;
    border-radius: ${SIZES.xSmallFix};
  }
`;
