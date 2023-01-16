import styled from "styled-components/macro";
import { DEVICES, SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
