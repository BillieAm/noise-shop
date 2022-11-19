import styled from "styled-components/macro";
import { device } from "../../device";

export const MobileEntryWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media ${device.tablet} {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    img {
      width: 80%;
    }
  }
`;
