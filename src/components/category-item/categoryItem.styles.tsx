import styled from "styled-components/macro";
import { Glass } from "../containers/glass-container/glassContainer.styles";
import { Link } from "react-router-dom";
import { SIZES } from "../../constants";

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
