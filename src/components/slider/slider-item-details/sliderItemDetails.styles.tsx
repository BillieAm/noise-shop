import styled from "styled-components/macro";
import { DEVICES, COLORS } from "../../../constants";

export const ItemSubtitle = styled.h5`
  display: none;

  @media ${DEVICES.laptop} {
    display: block;
    color: hsl(${COLORS.green});
  }
`;
