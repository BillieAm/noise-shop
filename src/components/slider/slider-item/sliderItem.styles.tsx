import styled from "styled-components/macro";
import { DEVISES } from "../../../constants";

export const MobileItem = styled.div`
  /* height: 12rem; */
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }

  @media ${DEVISES.laptop} {
    height: 770px;
    width: 1200px;
  }
`;

export const DesktopItem = styled(MobileItem)`
  object-fit: none;
`;
