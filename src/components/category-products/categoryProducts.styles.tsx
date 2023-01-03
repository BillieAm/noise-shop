import styled from "styled-components/macro";
import { SIZES } from "../../constants";

export const ProductsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
  gap: ${SIZES.xLargeRel};
`;
