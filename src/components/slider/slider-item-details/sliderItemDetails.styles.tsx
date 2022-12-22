import styled from "styled-components/macro";
import { DEVISES, COLORS } from "../../../constants";

export const ItemSubtitle = styled.h5`
  display: none;

  @media ${DEVISES.laptop} {
    display: block;
    color: hsl(${COLORS.green});
  }
`;
