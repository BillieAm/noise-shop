import GlassWrapper from "../glass-wrapper/GlassWrapper";
import EntryDisplayItem from "../entry-display-item/EntryDisplayItem";

import { DisplayWrapper } from "./entryDisplay.styles";

function EntryDisplay(): JSX.Element {
  const entryItems = [
    {
      id: 1,
      name: "Dials",
      imageUrl: "https://iili.io/by7JLb.jpg"
    },
    {
      id: 2,
      name: "The Orb",
      imageUrl: "https://iili.io/byc2Bs.jpg"
    },
    {
      id: 3,
      name: "Vinyl Strip",
      imageUrl: "https://iili.io/bylncv.jpg"
    }
  ];

  return (
    <DisplayWrapper>
      <GlassWrapper>
        {entryItems.map(item => (
          <EntryDisplayItem key={item.id} item={item} />
        ))}
      </GlassWrapper>
    </DisplayWrapper>
  );
}

export default EntryDisplay;
