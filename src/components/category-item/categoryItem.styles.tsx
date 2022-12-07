import styled from "styled-components/macro";

type BackgroundImageProps = {
  categoryImg: string;
};

export const BackgroundImag = styled.div<BackgroundImageProps>`
  background-image: ${({ categoryImg }) => `url(${categoryImg})`};
`;
