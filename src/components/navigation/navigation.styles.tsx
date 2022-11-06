import styled from "styled-components";
import { device } from "../../device";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  padding: 1em 0.5em 1.5em;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled(Logo)`
  height: 20px;

  @media ${device.tablet} {
    height: 27px;
  }

  @media ${device.laptopM} {
    height: 40px;
  }

  @media ${device.desktop} {
    height: 50px;
  }
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
  @media ${device.laptopM} {
    width: 12em;
  }
`;

export const NavLink = styled(Link)``;
