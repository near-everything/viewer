const Container = styled.div`
  border: 1px solid #ccc;
  height: fit-content;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #ccc;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
`;

const Button = styled.button`
  text-transform: lowercase !important;
`;

const Content = styled.div`
  padding: 1px;
  min-height: 300px;
`;

const StyledActionButton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 84px;
  z-index: 1000;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  background: radial-gradient(circle at 30% 30%, #4a4949, #000000);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06),
    0px 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease; // smooth transition

  &:hover {
    background: radial-gradient(circle at 70% 30%, #4a4949, #000000);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    transform: scale(0.98) translateY(4px); // scale down slightly and move downward
  }

  &:active {
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.2);
    transform: scale(0.96) translateY(6px); // more scale down and more downward movement for click
  }
`;

// const { DropdownMenu } =
//   VM.require("efiz.near/widget/Module.DropdownMenu") || null;

// const items = [
//   {
//     label: "Item 1",
//     onSelect: () => console.log("Item 1 selected"),
//   },
//   {
//     label: "Item 2",
//     onSelect: () => console.log("Item 2 selected"),
//   },
//   {
//     label: "Item 3",
//     onSelect: () => alert("Item 3 selected"),
//   },
// ];

// function DropdownItem({ label, onSelect }) {
//   return (
//     <Button onClick={onSelect}>
//       <span>{label}</span>
//     </Button>
//   );
// }

// function Modifier() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="black"
//       width="24px"
//       height="24px"
//     >
//       <circle cx="12" cy="12" r="8" />
//     </svg>
//   );
// }

const [Thing, setThing] = useState(() => () => <>{props.children}</>);
const [view, setView] = useState("");

const plugins = props.plugins;

// function Thing() {
//   if (state.view === "THING") {
//     return <>{props.children}</>;
//   } else {
//     return <>{plugins[state.view]}</>;
//   }
// }

// DROPDOWN //
function Modifier() {
  const renderIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="24px"
        height="24px"
      >
        <circle cx="12" cy="12" r="8" />
      </svg>
    );
  };

  function createButton(key, data) {
    const stateVal = view === key ? "active" : "inactive";
    if (data.creatorRequired && context.accountId !== creatorId) {
      return <></>;
    } else {
      return (
        <button
          className={"btn"}
          onClick={() => {
            setThing(() => () => <>{data.module()} </>);
          }}
        >
          <i className={data.state[stateVal].icon}></i>
          {data.state[stateVal].label}
        </button>
      );
    }
  }

  return (
    <Widget
      src="efiz.near/widget/Common.Dropdown"
      props={{
        renderIcon: renderIcon,
        elements: Object.keys(plugins)?.map((it) =>
          createButton(it, plugins[it])
        ),
      }}
    />
  );
}

return (
  <Container>
    <Header>
      <ButtonRow>
        <Modifier />
      </ButtonRow>
    </Header>
    <Content>
      <Thing />
    </Content>
    <StyledActionButton />
  </Container>
);

// I have an editor plugin
// Editor needs access to the full thing. All of it.
