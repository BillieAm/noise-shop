import styled from "styled-components/macro";
import { DEVICES, SIZES } from "../../constants";

import { Glass } from "../containers/glass-container/glassContainer.styles";

export const GlassWrapper = styled(Glass)`
  padding: ${SIZES.regularRel};
  display: flex;
  flex-direction: column;
  gap: ${SIZES.regularRel};

  @media ${DEVICES.laptop} {
    flex-direction: row;
  }
`;

export const ProductImage = styled.div``;

export const ProductContent = styled.div``;
