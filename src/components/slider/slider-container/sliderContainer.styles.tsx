import styled from "styled-components/macro";
import { DEVISES } from "../../../constants";

export const MobileEntryWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media ${DEVISES.laptop} {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: none;

  @media ${DEVISES.laptop} {
    display: flex;
    flex-direction: column;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;
