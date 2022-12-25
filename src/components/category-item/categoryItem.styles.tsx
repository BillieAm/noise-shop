import styled from "styled-components/macro";
import { Link } from "react-router-dom";

type BackgroundImageProps = {
  categoryImg: string;
};

export const CategoryLink = styled(Link)`
  display: block;
`;

export const BackgroundImag = styled.div<BackgroundImageProps>`
  background-image: ${({ categoryImg }) => `url(${categoryImg})`};
`;
