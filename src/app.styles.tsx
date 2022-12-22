import styled from "styled-components/macro";
import { DEVISES } from "./constants";

export const AppContainer = styled.div`
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${DEVISES.laptop} {
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;
  }
`;
