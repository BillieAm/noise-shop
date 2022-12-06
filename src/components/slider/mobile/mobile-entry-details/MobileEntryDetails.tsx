import Button from "../../../button/Button";

import { DetailsBox } from "./mobileEntryDetails.styles";

import { IProduct } from "../../../../types/shop";

function MobileEntryDetails({ item }: { item: IProduct }): JSX.Element {
  return (
    <DetailsBox>
      <h4>{item.name}</h4>
      <Button>learn more</Button>
    </DetailsBox>
  );
}

export default MobileEntryDetails;
