const typeSrc = props.typeSrc || "";
const blockHeight = props.blockHeight || "final";
let type = {
  name: "",
  properties: [],
  widgets: {},
};

State.init({
  newType: typeSrc,
  typeName: type.name || "",
  properties: type.properties || [],
  widgets: type.widgets || {},
  newPropertyName: "",
  newPropertyType: "string",
  newWidgetKey: "",
  newWidgetSrc: "",
  newTypeSrc: "every.near",
  typeSrc: "every.near",
  expanded: false,
});

let importedTypes = [];
if (state.typeSrc !== "") {
  const types = Social.get(`${state.typeSrc}/type/**`, "final");
  if (!types) {
    return <></>;
  }
  importedTypes =
    Object.keys(types)?.map((it) => `${state.typeSrc}/type/${it}`) || [];
}

const availableTypes = JSON.parse(props.availableTypes) || [
  "string",
  "boolean",
  "number",
  "date",
  "time",
  "tags",
  ...importedTypes,
];

const Container = styled.div`
  margin: 20px 0;
`;

const FormContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  max-width: 200px;
  margin-bottom: 10px;
  height: 30px;
`;

const Select = styled.select`
  height: 30px;
`;

const Button = styled.button`
  height: 30px;
`;

const Text = styled.p`
  display: inline-block;
  margin-right: 10px;
`;

const loadType = () => {
  const parts = state.newType.split("/");
  type = JSON.parse(Social.get(state.newType, blockHeight) || null);
  if (type) {
    type.name = parts[2];
    State.update({
      typeName: type.name,
      properties: type.properties,
      widgets: type.widgets,
    });
  }
};

if (prop.typeSrc !== "" && state.typeName === "") {
  loadType();
}

const handleAddProperty = () => {
  if (state.newPropertyName.trim() === "") return;

  const newProperty = {
    name: state.newPropertyName,
    type: state.newPropertyType,
    required: state.newPropertyRequired,
    isMulti: state.newPropertyIsMulti,
  };

  State.update({
    properties: [...state.properties, newProperty],
    newPropertyName: "",
    newPropertyType: "string",
    newPropertyIsMulti: false,
  });
};

const handleRemoveProperty = (index) => {
  const updatedProperties = [...state.properties];
  updatedProperties.splice(index, 1);
  State.update({ properties: updatedProperties });
};

const handlePropertyChange = (e, index) => {
  const updatedProperties = [...state.properties];
  updatedProperties[index].name = e.target.value;
  State.update({ properties: updatedProperties });
};

const handleTypeChange = (e, index) => {
  const updatedProperties = [...state.properties];
  updatedProperties[index].type = e.target.value;
  State.update({ properties: updatedProperties });
};

const handleMultiChange = (e, index) => {
  const updatedProperties = [...state.properties];
  updatedProperties[index].isMulti = e.target.value;
  State.update({ properties: updatedProperties });
};

const handleTypeNameChange = (e) => {
  State.update({ typeName: e.target.value.toLowerCase() });
};

const handleWidgetKeyChange = (e) => {
  State.update({ newWidgetKey: e.target.value.toLowerCase() });
};

const handleWidgetSrcChange = (e) => {
  State.update({ newWidgetSrc: e.target.value });
};

const handleAddWidget = () => {
  if (state.newWidgetKey.trim() === "" || state.newWidgetSrc.trim() === "")
    return;

  const newWidget = {
    [state.newWidgetKey]: state.newWidgetSrc,
  };

  State.update({
    widgets: { ...state.widgets, ...newWidget },
    newWidgetKey: "",
    newWidgetSrc: "",
  });
};

const handleRemoveWidget = (key) => {
  const updatedWidgets = { ...state.widgets };
  delete updatedWidgets[key];
  State.update({ widgets: updatedWidgets });
};

const composeData = () => {
  const data = {
    type: {
      [state.typeName]: JSON.stringify({
        properties: state.properties,
        widgets: state.widgets,
      }),
    },
  };
  return data;
};

function TypeSelect({ value, onChange }) {
  return (
    <Select value={value} onChange={onChange}>
      {availableTypes.map((it) => (
        <option value={it} key={it}>
          {it}
        </option>
      ))}
    </Select>
  );
}

function MultiSelect({ value, onChange }) {
  return (
    <Select value={value} onChange={onChange}>
      <option value={false}>single</option>
      <option value={true}>multi</option>
    </Select>
  );
}

return (
  <Container>
    <Row>
      <Text>Load Type:</Text>
      <Input
        type="text"
        value={state.newType}
        onChange={(e) => State.update({ newType: e.target.value })}
        placeholder={"accountId/type/Type"}
      />
      <Button onClick={loadType}>load</Button>
    </Row>
    <Row>
      <Text>Type Source:</Text>
      <Input
        type="text"
        value={state.newTypeSrc}
        onChange={(e) => State.update({ newTypeSrc: e.target.value })}
        placeholder={"accountId"}
      />
      <Button onClick={() => State.update({ typeSrc: state.newTypeSrc })}>
        apply
      </Button>
    </Row>
    <FormContainer>
      <Row>
        <Text>Type Name:</Text>
        <Input
          type="text"
          placeholder="Type Name"
          value={state.typeName}
          onChange={handleTypeNameChange}
        />
      </Row>
      <Text>Properties:</Text>
      {state.properties?.map((property, index) => (
        <Row key={index}>
          <Input
            type="text"
            value={property.name}
            onChange={(e) => handlePropertyChange(e, index)}
          />
          <TypeSelect
            value={property.type}
            onChange={(e) => handleTypeChange(e, index)}
          />
          <MultiSelect
            value={property.isMulti}
            onChange={(e) => handleMultiChange(e, index)}
          />
          <Button onClick={() => handleRemoveProperty(index)}>Remove</Button>
        </Row>
      ))}
      <Row>
        <Input
          type="text"
          placeholder="Property Name"
          value={state.newPropertyName}
          onChange={(e) => State.update({ newPropertyName: e.target.value })}
        />
        <TypeSelect
          value={state.newPropertyType}
          onChange={(e) => State.update({ newPropertyType: e.target.value })}
        />
        <MultiSelect
          value={state.newPropertyIsMulti}
          onChange={(e) => State.update({ newPropertyIsMulti: e.target.value })}
        />
        <Button
          onClick={handleAddProperty}
          disabled={state.newPropertyName.trim() === ""}
        >
          +
        </Button>
      </Row>
      <Text>Widgets:</Text>
      {Object.entries(state.widgets)?.map(([key, src]) => (
        <Row key={key}>
          <Text>{key}:</Text>
          <Input type="text" value={src} onChange={() => {}} />
          <Button onClick={() => handleRemoveWidget(key)}>Remove</Button>
        </Row>
      ))}
      <Row>
        <Input
          type="text"
          placeholder="Widget Key"
          value={state.newWidgetKey}
          onChange={handleWidgetKeyChange}
        />
        {":"}
        <Input
          type="text"
          placeholder="Widget Src"
          value={state.newWidgetSrc}
          onChange={handleWidgetSrcChange}
        />
        <Button
          onClick={handleAddWidget}
          disabled={
            state.newWidgetKey.trim() === "" || state.newWidgetSrc.trim() === ""
          }
        >
          +
        </Button>
      </Row>
      <Row>
        <CommitButton
          force
          data={composeData()}
          disabled={state.properties.length === 0}
          className="styless"
        >
          create
        </CommitButton>
      </Row>
    </FormContainer>
  </Container>
);
