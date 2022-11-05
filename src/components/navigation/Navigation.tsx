import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/CartIcon";

import {
  NavigationContainer,
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
          <Logo />
        </LogoContainer>
        <NavLinks>
          <Link to="/shop">Shop</Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
    </>
  );
}

export default Navigation;
