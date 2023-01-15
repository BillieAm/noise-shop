import styled from "styled-components/macro";
import { DEVICES, SIZES } from "../../constants";

export const ProductsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  gap: ${SIZES.xLargeRel};

  @media ${DEVICES.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  }
`;
