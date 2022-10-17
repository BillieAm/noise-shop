import styled from "styled-components";

export const AppContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media (min-width: 450px) {
    width: 80%;
    margin: 0 auto;
  }
`;
