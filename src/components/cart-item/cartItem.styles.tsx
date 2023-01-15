import styled from "styled-components/macro";
import { SIZES } from "../../constants";

export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 5rem auto;
  margin: ${SIZES.smallRel};
`;

export const StyledImage = styled.img`
  align-self: center;
  width: 4rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const StyledItemInfo = styled.div`
  align-self: center;
`;
