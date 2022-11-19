import React from "react";

import { EntryItemWrapper } from "./mobileEntry.styles";

import { IProduct } from "../../../types/shop";

function MobileEntry({ item }: { item: IProduct }): JSX.Element {
  return (
    <EntryItemWrapper>
      <img src={item.imageUrl} alt={item.name} />
    </EntryItemWrapper>
  );
}

export default MobileEntry;
