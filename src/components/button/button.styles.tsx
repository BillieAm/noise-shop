import styled from "styled-components/macro";

export const BaseButton = styled.button`
  font-weight: 700;
  padding: 0.5em 1.5em;
  background-color: hsl(var(--clr-yellow));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: capitalize;
`;

export const BuyButton = styled(BaseButton)`
  background-color: hsl(var(--clr-turquoise));
`;
