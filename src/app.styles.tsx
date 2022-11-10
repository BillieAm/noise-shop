import styled from "styled-components/macro";
import { device } from "./device";

export const AppContainer = styled.div`
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 80%;
    margin: 0 auto;
  }
`;
