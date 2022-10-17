import styled from "styled-components";

export const AppContainer = styled.div`
  padding: 0 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 450px) {
    width: 80%;
    margin: 0 auto;
  }
`;
