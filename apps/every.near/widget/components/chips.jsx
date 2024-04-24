const { Chip } = VM.require("every.near/widget/components") || {
  Chip: () => <></>,
};

const items = props.items ?? [];
const onSelect = props.onSelect ?? (() => {});

const [selectedItems, setSelectedItems] = useState([]);

const handleClick = (item) => {
  if (props.multiple) {
    if (!selectedItems.includes(item)) {
      setSelectedItems((prev) => [...prev, item]);
    } else if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    }
  } else {
    if (selectedItems !== item) {
      setSelectedItems(item);
    } else if (selectedItems === item) {
      setSelectedItems(null);
    }
  }
};

useEffect(() => {
  onSelect(selectedItems);
}, [selectedItems, onSelect]);

if (items.length === 0) {
  return <div>No items passed</div>;
}

const duplicates = items.filter((item, index) => items.indexOf(item) !== index);
if (duplicates.length > 0) {
  return <div>Duplicate Items Found</div>;
}

return (
  <div className="d-flex align-items-center gap-2 flex-wrap">
    {items.map((item) => (
      <Chip
        key={item}
        selected={props.multiple ? selectedItems.includes(item) : selectedItems === item}
        onClick={() => handleClick(item)}
        size={props.size}
        multiple={props.multiple}
      >
        {item}
      </Chip>
    ))}
  </div>
);
