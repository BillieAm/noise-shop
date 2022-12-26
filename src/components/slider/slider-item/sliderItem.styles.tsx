import styled from "styled-components/macro";
import { DEVISES } from "../../../constants";

const BaseItem = styled.div`
  img {
    object-fit: cover;
  }
`;

export const MobileItem = styled(BaseItem)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    aspect-ratio: 1.6 / 1;
  }

  @media ${DEVISES.tablet} {
    img {
      aspect-ratio: 2.6 / 1;
    }
  }
`;

export const DesktopItem = styled(BaseItem)`
  object-fit: none;
`;
