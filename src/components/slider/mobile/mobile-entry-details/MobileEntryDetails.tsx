import Button from "../../../button/Button";
import GlassWrapper from "../../../containers/glass-wrapper/GlassWrapper";

import { IProduct } from "../../../../types/shop";

function MobileEntryDetails({ item }: { item: IProduct }): JSX.Element {
  return (
    <GlassWrapper glassType="details">
      <h3>{item.name}</h3>
      <Button>learn more</Button>
    </GlassWrapper>
  );
}

export default MobileEntryDetails;
