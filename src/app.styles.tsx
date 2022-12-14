import styled from "styled-components/macro";
import { Glass } from "./components/containers/glass-wrapper/glassWrapper.styles";
import { DEVISES } from "./constants";

export const AppContainer = styled.div`
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Glass} {
    flex-grow: 1;
  }

  @media ${DEVISES.laptop} {
    width: 80%;
    margin: 0 auto;
  }
`;
