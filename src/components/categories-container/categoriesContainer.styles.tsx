import styled from "styled-components/macro";
import { DEVISES, SIZES } from "../../constants";

export const CategoriesWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${SIZES.regularRel};

  @media ${DEVISES.laptop} {
  }
`;
