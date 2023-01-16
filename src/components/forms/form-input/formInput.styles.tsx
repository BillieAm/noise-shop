import styled, { css } from "styled-components/macro";
import { COLORS } from "../../../constants";

const StyledAccentLabel = css`
  background-color: hsl(${COLORS.purple} / 0.5);
  border-radius: 0.5rem;
`;

type StyledLabelProps = {
  accented?: boolean;
};

export const StyledLabel = styled.label<StyledLabelProps>`
  ${({ accented }) => accented && StyledAccentLabel}
`;

export const StyledInputContainer = styled.div`
  margin-bottom: 1em;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 10px hsl(${COLORS.dark} / 0.3);
  outline: none;
  padding: 0.5em 0.8em;
  &:focus {
    box-shadow: 0 0 10px hsl(${COLORS.peachPink} / 0.6);
  }
`;
