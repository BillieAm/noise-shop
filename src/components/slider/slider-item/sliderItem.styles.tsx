import styled from "styled-components/macro";
import { DEVISES, FONT_SIZES } from "../../../constants";

export const MobileItem = styled.div`
  height: 12rem;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }

  @media ${DEVISES.tablet} {
    height: 14rem;
    font-size: ${FONT_SIZES.small};
  }
`;

export const DesktopItem = styled(MobileItem)`
  object-fit: none;
`;
