import { InputHTMLAttributes } from "react";

import {
  StyledInputContainer,
  StyledInput,
  StyledLabel
} from "./formInput.styles";

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

function FormInput({ label, ...otherProps }: InputProps) {
  return (
    <StyledInputContainer>
      <StyledLabel
        htmlFor={otherProps.name}
        accented={Boolean(otherProps.value)}
      >
        {label}
      </StyledLabel>
      <StyledInput id={otherProps.name} {...otherProps} />
    </StyledInputContainer>
  );
}

export default FormInput;
