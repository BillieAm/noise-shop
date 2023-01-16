import styled from "styled-components/macro";
import { SIZES, COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledCartIconContainer = styled.div`
  position: relative;
`;

export const StyledCartIconCounter = styled.span`
  font-size: ${SIZES.xSmallFix};
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  bottom: 3px;
  left: -30%;
  color: hsl(${COLORS.white});
  background-color: hsl(${COLORS.blue});
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
