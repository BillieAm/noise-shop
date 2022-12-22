import styled from "styled-components/macro";
import { DEVISES } from "../../../constants";

export const MobileEntryWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1em;

  @media ${DEVISES.laptop} {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: none;

  @media ${DEVISES.laptop} {
    width: 100%;
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
