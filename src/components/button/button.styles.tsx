import styled from "styled-components/macro";
import { COLORS } from "../../constants";

export const BaseButton = styled.button`
  font-weight: 700;
  padding: 0.5em 1.5em;
  background-color: hsl(${COLORS.turquoise});
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: capitalize;
  white-space: nowrap;
`;

export const BuyButton = styled(BaseButton)`
  background-color: hsl(${COLORS.green});
`;
