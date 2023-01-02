import styled from "styled-components/macro";
import { SIZES } from "../../../constants";

export const StyledOr = styled.div`
  display: flex;
  align-items: center;
  div {
    flex-grow: 1;
  }

  p {
    font-size: ${SIZES.smallRel};
    color: hsl(0, 0%, 0%, 0.5);
    padding-inline: 0.5em;
  }
`;
