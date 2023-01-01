import styled from "styled-components/macro";
import { Glass } from "../glass-container/glassContainer.styles";
import { DEVISES, SIZES } from "../../../constants";

export const MainGlass = styled(Glass)`
  position: relative;
  padding: 1em;
  padding-top: calc(${SIZES.small} * 2);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DEVISES.tablet} {
    padding: 1.5em;
    padding-top: calc(${SIZES.regular} * 2);
  }

  @media ${DEVISES.laptop} {
    padding: 2em;
    padding-top: calc(${SIZES.large} * 2);
    min-height: 680px;
  }
`;
