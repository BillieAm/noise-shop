import Button from "../../../button/Button";
import GlassWrapper from "../../../containers/glass-wrapper/GlassWrapper";

import { IProduct } from "../../../../types/shop";

function MobileEntryDetails({ item }: { item: IProduct }): JSX.Element {
  return (
    <GlassWrapper glassType="details">
      <h2>{item.name}</h2>
      <Button>learn more</Button>
    </GlassWrapper>
  );
}

export default MobileEntryDetails;
