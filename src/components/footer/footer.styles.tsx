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
    background-color: hsl(var(--clr-purple));
    padding: 0.2em 0.7em;
    font-weight: 400;
    border: 1.5px solid black;
    border-radius: 2px;
  }
`;
