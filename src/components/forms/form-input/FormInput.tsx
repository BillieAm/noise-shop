import { InputHTMLAttributes } from "react";

import GlassContainer from "../../containers/glass-container/GlassContainer";

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

function FormInput({ label, ...otherProps }: InputProps) {
  return (
    <GlassContainer glassType="base">
      <label>{label}</label>
      <input {...otherProps} />
    </GlassContainer>
  );
}

export default FormInput;
