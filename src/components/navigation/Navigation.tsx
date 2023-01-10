import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";

import {
  NavigationContainer,
  StyledLogo,
  LogoContainer,
  NavLinks
} from "./navigation.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

function Navigation(): JSX.Element {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <StyledLogo />
        </LogoContainer>
        <NavLinks>
          <Link to="/shop">Shop</Link>
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          {currentUser ? (
            <span onClick={handleSignOut}>Sign Out</span>
          ) : (
            <Link to="/sign-in">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
    </>
  );
}

export default Navigation;
