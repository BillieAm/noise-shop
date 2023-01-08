import styled from "styled-components/macro";
import { SIZES } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";

export const Dropdown = styled.div`
  font-size: ${SIZES.smallRel};
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const StyledWhiteGlass = styled(Glass)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${SIZES.smallRel};
`;
