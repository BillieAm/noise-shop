import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  padding: 1em 0.5em;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 450px) {
    width: 25%;
  }
`;

export const NavLink = styled(Link)``;
