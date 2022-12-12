import styled from "styled-components/macro";
import { device } from "../../../device";

export const Glass = styled.div`
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
`;

export const GlassDetailsBox = styled(Glass)`
  font-size: var(--fs-300);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: none;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(var(--clr-turquoise));

  @media ${device.tablet} {
  }
`;
