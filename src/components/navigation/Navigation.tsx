import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Outlet, Link } from "react-router-dom";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks
} from "./navigation.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
