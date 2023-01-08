import styled from "styled-components/macro";
import { SIZES } from "../../constants";

export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 5rem);
  /* gap: ${SIZES.smallRel}; */
  margin-bottom: ${SIZES.smallRel};
`;

export const StyledImage = styled.img`
  width: 4rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const StyledItemInfo = styled.div`
  grid-column: span 2;
  align-self: center;
`;
