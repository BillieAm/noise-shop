import styled from "styled-components/macro";
import { DEVISES, COLORS } from "../../../constants";

export const Glass = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`;

export const GlassMain = styled(Glass)`
  padding: 1em;
  flex-grow: 1;
  display: flex;
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

export const GlassDetailsBox = styled(Glass)`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  padding: 1.3em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: none;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(${COLORS.yellow});

  @media ${DEVISES.laptop} {
    flex-direction: column;
    gap: 1.5em;
    left: unset;
    min-width: 40%;
    border-bottom-right-radius: 1em;
  }
`;
