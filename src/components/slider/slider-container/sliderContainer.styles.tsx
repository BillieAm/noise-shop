import styled from "styled-components/macro";
import { DEVISES } from "../../../constants";

export const MobileEntryWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media ${DEVISES.tablet} {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: none;

  @media ${DEVISES.tablet} {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;
