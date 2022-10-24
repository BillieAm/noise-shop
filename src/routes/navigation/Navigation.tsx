import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

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
        <CartDropdown />
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
