import { Link } from "react-router-dom";

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
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <StyledLogo />
        </LogoContainer>
        <NavLinks>
          <Link to="/shop">Shop</Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Link to="/sign-in">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
    </>
  );
}

export default Navigation;
