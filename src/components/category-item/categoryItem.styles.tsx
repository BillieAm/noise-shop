import styled from "styled-components/macro";
import { Glass } from "../containers/glass-container/glassContainer.styles";
import { Link } from "react-router-dom";
import { SIZES, COLORS } from "../../constants";

type BackgroundImageProps = {
  categoryImg: string;
};

export const CategoryLink = styled(Link)``;

export const GlassWrapper = styled(Glass)`
  height: 10em;
  position: relative;
  display: grid;
  backdrop-filter: none;
  border-radius: ${SIZES.xSmallFix};
  overflow: hidden;
  place-items: center;
  transition: all 200ms ease-in;
  &:hover {
    background-color: hsl(${COLORS.white} / 0.4);
  }

  h3 {
    width: 80%;
    background-color: hsl(${COLORS.dark} / 0.7);
    border: 2px solid hsl(${COLORS.white});
    color: hsl(${COLORS.yellow});
    text-transform: capitalize;
    text-align: center;
    align-self: end;
    margin-bottom: ${SIZES.regularRel};
  }
`;

export const StyledCategoryItem = styled.div<BackgroundImageProps>`
  background-image: ${({ categoryImg }) => `url(${categoryImg})`};
  background-size: cover;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
`;
