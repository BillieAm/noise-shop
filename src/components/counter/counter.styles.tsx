import styled from "styled-components/macro";
import { SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.regularRel};
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
