import styled from "styled-components/macro";
import { DEVICES } from "../../../constants";

export const MobileEntryWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media ${DEVICES.tablet} {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: none;

  @media ${DEVICES.tablet} {
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
