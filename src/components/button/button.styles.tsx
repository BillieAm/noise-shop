import styled from "styled-components/macro";
import { SIZES, COLORS } from "../../constants";

export const BasicButton = styled.button`
  font-weight: 700;
  font-size: ${SIZES.smallRel};
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: capitalize;
  white-space: nowrap;
`;

export const AddButton = styled(BasicButton)`
  background-color: hsl(${COLORS.peachPink});
  width: 100%;
  color: hsl(${COLORS.dark});
  border: 0.17em solid hsl(${COLORS.dark});
`;

export const InfoButton = styled(BasicButton)`
  background-color: hsl(${COLORS.turquoise});
`;

export const FormButton = styled(BasicButton)`
  width: 100%;
  font-weight: 400;
  border-radius: 0.2rem;
  padding: 0.8em;
  margin: 1em 0;
`;
