import styled from "styled-components/macro";
import { DEVICES, SIZES } from "../../constants";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  padding: 1em 0.5em 1.5em;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled(Logo)`
  height: ${SIZES.mediumRel};
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${SIZES.xLargeRel};

  @media ${DEVICES.tablet} {
    gap: 2em;
  }
`;

export const NavLink = styled(Link)``;
