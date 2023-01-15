import styled from "styled-components/macro";
import { DEVICES, SIZES, COLORS } from "../../constants";

import { Glass } from "../containers/glass-container/glassContainer.styles";

export const GlassWrapper = styled(Glass)`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.regularRel};
  overflow: hidden;

  @media ${DEVICES.laptop} {
    flex-direction: row;
  }
`;

export const ProductImage = styled.div`
  @media ${DEVICES.laptop} {
    min-width: 35rem;
  }
`;

export const ProductContent = styled.div`
  padding: ${SIZES.mediumRel};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentHeadings = styled.div`
  h2 {
    color: hsl(${COLORS.blue});
    margin-bottom: ${SIZES.xSmallRel};
  }

  h3 {
    color: hsl(${COLORS.dark} / 0.8);
  }
`;

export const ContentBody = styled.p`
  margin-block: ${SIZES.regularRel};
`;

export const ContentFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  p {
    font-weight: bold;
    color: hsl(${COLORS.dark} / 0.8);
    grid-column: span 2;
  }

  button {
    grid-column: span 2;
  }
`;
