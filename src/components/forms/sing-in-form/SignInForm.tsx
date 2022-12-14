import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import GlassContainer from "../../containers/glass-container/GlassContainer";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/Button";
import HorizontalOr from "../horizontal-or/HorizontalOr";

import { UserContext } from "../../../contexts/user.context";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: ""
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

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
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
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
    setCurrentUser(user);
  };

  return (
    <GlassContainer glassType="form">
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

        <Button buttonType={BUTTON_TYPE_CLASSES.form}>Sign In</Button>
      </form>

      <HorizontalOr />

      <Button buttonType={BUTTON_TYPE_CLASSES.form} onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <small>
        Don't have an account? <Link to="/sign-up">Switch to Sign-up</Link>
      </small>
    </GlassContainer>
  );
}

export default SignInForm;
