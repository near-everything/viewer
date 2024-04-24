const items = ["test", "test2", "test3", "test4"];
const [selected, setSelected] = useState(null);

useEffect(() => console.log(selected), [selected]);

return (
  <Widget
    src="every.near/widget/components.chips"
    props={{ items: items, onSelect: (items) => setSelected(items), multiple: false }}
  />
);
