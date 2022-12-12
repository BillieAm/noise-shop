import MobileEntryDetails from "../mobile-entry-details/MobileEntryDetails";

import { EntryItemWrapper } from "./mobileEntry.styles";

import { IProduct } from "../../../../types/shop";

function MobileEntry({ item }: { item: IProduct }): JSX.Element {
  return (
    <EntryItemWrapper>
      <img src={item.imageUrl} alt={item.name} />
      <MobileEntryDetails item={item} />
    </EntryItemWrapper>
  );
}

export default MobileEntry;
