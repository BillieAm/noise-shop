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
      <img src={item.imageUrl} alt={item.name} />
    </div>
  );
}

export default EntryDisplayItem;
