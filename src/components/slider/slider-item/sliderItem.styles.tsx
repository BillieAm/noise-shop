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
  margin: 2em;
  border-radius: 0.5em;
  overflow: hidden;
  img {
    aspect-ratio: 2 / 1;
  }
`;
