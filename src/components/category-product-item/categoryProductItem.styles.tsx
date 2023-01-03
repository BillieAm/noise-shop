import styled from "styled-components/macro";
import { SIZES, COLORS } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";
import { AddButton } from "../button/button.styles";

export const CardGlass = styled(Glass)`
  padding: ${SIZES.smallRel};
`;

export const Card = styled.div`
  height: 100%;
  display: grid;
  ${AddButton} {
    align-self: end;
  }
`;

export const CardImg = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${SIZES.xSmallFix};
`;

export const CardInfo = styled.div`
  text-align: center;
`;

export const Price = styled.p`
  color: hsl(${COLORS.dark} / 0.6);
`;
