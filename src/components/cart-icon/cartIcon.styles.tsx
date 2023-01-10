import styled from "styled-components/macro";
import { SIZES, COLORS } from "../../constants";

export const StyledCartIconContainer = styled.div`
  position: relative;
`;

export const StyledCartIconCounter = styled.span`
  font-size: ${SIZES.xSmallFix};
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  bottom: 0;
  left: -50%;
  color: hsl(${COLORS.white});
  background-color: hsl(${COLORS.blue});
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
