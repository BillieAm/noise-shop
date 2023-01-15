import styled from "styled-components/macro";
import { DEVICES, SIZES } from "../../constants";

export const StyledCartItem = styled.div`
  font-size: ${SIZES.smallRel};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SIZES.mediumRel};

  @media ${DEVICES.tablet} {
    font-size: ${SIZES.regularRel};
  }
`;

export const StyledLeftSid = styled.div`
  display: flex;
  align-items: center;
`;
