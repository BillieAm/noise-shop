import GlassWrapper from "../glass-wrapper/GlassWrapper";
import EntryDisplayItem from "../entry-display-item/EntryDisplayItem";

import dials from "../../assets/entry/Dials-GUI-2x.jpeg";
import theOrb from "../../assets/entry/The-Orb-GUI-2x.jpeg";
import vinylStrip from "../../assets/entry/Vinyl-Strip-GUI-2x.jpeg";

import { DisplayWrapper } from "./entryDisplay.styles";

function EntryDisplay(): JSX.Element {
  const entryItems = [
    {
      id: 1,
      name: "Dials",
      imageUrl: dials
    },
    {
      id: 2,
      name: "The Orb",
      imageUrl: theOrb
    },
    {
      id: 3,
      name: "Vinyl Strip",
      imageUrl: vinylStrip
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
