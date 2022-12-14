import styled from "styled-components/macro";
import { DEVICES, SIZES, COLORS } from "../../constants";
import { BasicButton } from "../button/button.styles";

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
  font-size: ${SIZES.smallFix};

  @media ${DEVICES.tablet} {
    font-size: ${SIZES.regularFix};
  }

  ${BasicButton} {
    background-color: hsl(${COLORS.pink});
    padding: 0.2em 0.7em;
    font-weight: 400;
    border: 1.5px solid black;
    border-radius: 2px;
  }
`;
