import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/FormInput";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: ""
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("User does not exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button>Sign In</button>
      </form>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <small>
        Don't have an account? <Link to="/sign-up">Switch to Sign-up</Link>
      </small>
    </div>
  );
}

export default SignInForm;
