import styled from "styled-components/macro";
import { BaseButton } from "../button/button.styles";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const Newsletter = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  font-size: var(--fs-300);

  ${BaseButton} {
    background-color: hsl(var(--clr-light-yellow));
    padding: 0.4em 1em;
    border: 1px solid black;
    border-radius: 2px;
  }
`;
