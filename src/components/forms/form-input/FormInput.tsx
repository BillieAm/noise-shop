import { InputHTMLAttributes } from "react";

import GlassContainer from "../../containers/glass-container/GlassContainer";

import { StyledInputContainer, StyledInput } from "./formInput.styles";

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

function FormInput({ label, ...otherProps }: InputProps) {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <GlassContainer glassType="base">
        <StyledInput {...otherProps} />
      </GlassContainer>
    </StyledInputContainer>
  );
}

export default FormInput;
