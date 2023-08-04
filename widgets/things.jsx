const defaultFilters = props.defaultFilters ?? {};
const defaultType = props.defaultType || "thing";

const Button = styled.button``;

State.init({
  typeName: defaultType,
});

const renderHeader = () => (
  <div className="d-flex justify-content-between gap-2 align-items-center">
    <div className="col">
      <h2 className="h2">every {state.typeName}</h2>
      <Button onClick={() => State.update({ typeName: "thing" })}>thing</Button>
      <Button onClick={() => State.update({ typeName: "type" })}>type</Button>
      <Button onClick={() => State.update({ typeName: "widget" })}>
        widgets
      </Button>
    </div>
    <Widget
      src="nui.sking.near/widget/Input.Button"
      props={{
        variant: "info",
        size: "lg",
        buttonProps: {
          style: {
            fontWeight: 500,
          },
        },
        children: (
          <>
            Create a new {state.typeName}
            <i className="bi bi-plus-lg"></i>
          </>
        ),
      }}
    />
  </div>
);

const renderThings = () => {
  return (
    <Widget
      src="efiz.near/widget/Things.list"
      props={{
        typeName: state.typeName,
        ...props,
      }}
    />
  );
};

return (
  <div>
    {renderHeader()}
    {renderThings()}
  </div>
);
