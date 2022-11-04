import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import GlassWrapper from "../glass-wrapper/GlassWrapper";
import EntryDisplayItem from "../entry-display-item/EntryDisplayItem";

import { DisplayWrapper } from "./entryDisplay.styles";

function EntryDisplay(): JSX.Element {
  const categories = useContext(CategoriesContext);
  console.log(categories);

  return (
    <DisplayWrapper>
      <GlassWrapper>
        {categories.map(category => {
          const randIdx: number = Math.floor(
            Math.random() * category.items.length
          );
          return (
            <EntryDisplayItem
              key={category.title}
              product={category.items[randIdx]}
            />
          );
        })}
      </GlassWrapper>
    </DisplayWrapper>
  );
}

export default EntryDisplay;
