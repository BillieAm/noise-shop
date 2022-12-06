import styled from "styled-components/macro";
import { Glass } from "../../../containers/glass-wrapper/glassWrapper.styles";

export const EntryItemWrapper = styled.div`
  position: relative;
  border-radius: 1em;
  overflow: hidden;

  img {
    height: 12em;
    object-fit: cover;
  }

  ${Glass} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: none;
    border-radius: 0;
  }
`;
