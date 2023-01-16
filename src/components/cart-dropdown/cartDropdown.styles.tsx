import styled from "styled-components/macro";
import { SIZES, COLORS } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";
import { BasicButton } from "../button/button.styles";

export const Dropdown = styled.div`
  min-width: 20em;
  font-size: ${SIZES.smallRel};
  position: absolute;
  right: 0;
  z-index: 1;

  ${BasicButton} {
    width: 100%;
    color: hsl(${COLORS.dark});
    background-color: hsl(${COLORS.lightYellow});
    border: 2px solid hsl(${COLORS.dark});
    margin-top: ${SIZES.smallRel};
    padding: 0.5em;
    border-radius: 0.3rem;
  }
`;

export const StyledWhiteGlass = styled(Glass)`
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(0, 0, 0, 0.4);
  padding: ${SIZES.smallRel};
`;
