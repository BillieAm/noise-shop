import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Outlet, Link } from "react-router-dom";

import { NavigationContainer } from "./navigation.styles";

function Navigation(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Link className="Logo" to="/">
          <Logo />
        </Link>
        <div>
          <Link to="/shop">Shop</Link>
        </div>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
