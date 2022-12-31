import styled from "styled-components/macro";
import { COLORS } from "../../constants";

export const BasicButton = styled.button`
  font-weight: 700;
  font-size: 0.75em;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: capitalize;
  white-space: nowrap;
`;

export const BaseButton = styled(BasicButton)`
  background-color: hsl(${COLORS.turquoise});
`;

export const BuyButton = styled(BasicButton)`
  background-color: hsl(${COLORS.green});
`;

export const FormButton = styled(BasicButton)`
  width: 100%;
  font-weight: 400;
  border-radius: 0.2rem;
  padding: 0.8em;
  margin: 1em 0;
`;
