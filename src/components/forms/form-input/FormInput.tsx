import { InputHTMLAttributes } from "react";

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

function FormInput({ label, ...otherProps }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
}

export default FormInput;
