import MobileEntryDetails from "../mobile-entry-details/MobileEntryDetails";
import GlassWrapper from "../../../containers/glass-wrapper/GlassWrapper";

import { EntryItemWrapper } from "./mobileEntry.styles";

import { IProduct } from "../../../../types/shop";

function MobileEntry({ item }: { item: IProduct }): JSX.Element {
  return (
    <EntryItemWrapper>
      <img src={item.imageUrl} alt={item.name} />
      <GlassWrapper>
        <MobileEntryDetails item={item} />
      </GlassWrapper>
    </EntryItemWrapper>
  );
}

export default MobileEntry;
