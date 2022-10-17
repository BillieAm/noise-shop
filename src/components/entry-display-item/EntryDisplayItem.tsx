interface entryProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
  };
}

function EntryDisplayItem({ item }: entryProps): JSX.Element {
  return (
    <div>
      <img src={item.imageUrl} alt="Dials GUI 2x" />
    </div>
  );
}

export default EntryDisplayItem;
