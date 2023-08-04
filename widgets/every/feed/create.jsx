const onChange = props.onChange;
const key = props.pPath;

const Input = styled.input`
  padding: 8px;
`;

const Button = styled.button`
  text-transform: lowercase !important;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const options = ["md", "social", "every.near/type/image"];

// <Input placeholder="key" onChange={() => {}} />
return (
  <Container>
    <Typeahead
      options={options}
      multiple
      onChange={(value) => {
        onChange({ typeWhitelist: value, key });
      }}
      placeholder="available types..."
    />
  </Container>
);
