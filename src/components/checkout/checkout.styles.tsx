import styled from "styled-components/macro";
import { SIZES, COLORS } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";
import { BasicButton } from "../button/button.styles";

export const StyledCartGlass = styled(Glass)`
  padding: ${SIZES.mediumRel};
`;

export const StyledCartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${BasicButton} {
    background-color: hsl(${COLORS.blue});
    color: hsl(${COLORS.white});
  }
`;

export const StyledEmptyCart = styled.div`
  font-size: ${SIZES.mediumRel};
  text-align: center;
  a {
    color: hsl(${COLORS.blue});
    text-decoration: underline;
  }
`;
