import GlassContainer from "../glass-container/GlassContainer";
import EntryDisplayItem from "../entry-display-item/EntryDisplayItem";

import { DisplayWrapper } from "./entryDisplay.styles";

function EntryDisplay(): JSX.Element {
  return (
    <GlassContainer>
      <DisplayWrapper>
        <EntryDisplayItem />
      </DisplayWrapper>
    </GlassContainer>
  );
}

export default EntryDisplay;
