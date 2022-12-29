import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/FormInput";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email already in use");
      } else {
        console.log("User creation error:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button>Sign Up</button>
      </form>

      <small>
        Already have an account? <Link to="/sign-in">Switch to Sign-in</Link>
      </small>
    </div>
  );
}

export default SignUpForm;
