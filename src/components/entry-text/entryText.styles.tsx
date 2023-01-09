import styled from "styled-components/macro";
import { SIZES } from "../../constants";
import { Glass } from "../containers/glass-container/glassContainer.styles";

export const StyledEntryText = styled(Glass)`
  background-color: rgba(255, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  padding: ${SIZES.regularRel};
  border-radius: ${SIZES.xSmallFix};
  margin-bottom: ${SIZES.regularRel};
`;
