import styled from "styled-components/macro";
import { DEVICES } from "./constants";

export const AppContainer = styled.div`
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media ${DEVICES.laptop} {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
