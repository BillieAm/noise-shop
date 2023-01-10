import styled from "styled-components/macro";
import { Glass } from "../glass-container/glassContainer.styles";
import { DEVICES, SIZES } from "../../../constants";

export const MainGlass = styled(Glass)`
  position: relative;
  padding: 1em;
  padding-top: calc(${SIZES.smallFix} * 2.5);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DEVICES.tablet} {
    padding: 1.5em;
    padding-top: calc(${SIZES.regularFix} * 2.5);
  }

  @media ${DEVICES.laptop} {
    padding: 2em;
    padding-top: calc(${SIZES.largeFix} * 2.5);
  }
`;
