import styled from "styled-components/macro";
import { Glass } from "../glass-container/glassContainer.styles";
import { DEVISES } from "../../../constants";

export const MainGlass = styled(Glass)`
  padding: 1em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DEVISES.tablet} {
    padding: 1.5em;
  }

  @media ${DEVISES.laptop} {
    padding: 2em;
    min-height: 680px;
  }
`;
