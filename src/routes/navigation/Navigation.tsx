import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation(): JSX.Element {
  return (
    <>
      <nav>
        <Link className="Logo" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
