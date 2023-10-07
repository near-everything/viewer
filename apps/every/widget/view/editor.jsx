const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  background-color: #f0f0f0;
`;

const EditorContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Footer = styled.div`
  height: 120px;
  width: 100%;
  background-color: #f0f0f0;
`;

const defaultValue = "";
const language = "json";
const [path, setPath] = useState("");

if (path) {
  const parts = path.split("/");
  if (parts[1] === "widget") {
    language = "javascript";
    defaultValue = Social.get(path, "final");
  } else {
    language = "json";
    defaultValue = JSON.stringify(
      JSON.parse(Social.get(path, "final")),
      null,
      2
    );
  }
}

const [code, setCode] = useState(value);

function onPublish() {
  const parts = path.split("/");
  Social.set({
    [parts[1]]: {
      [parts[2]]: {
        "": JSON.stringify(code),
      },
    },
  });
}

return (
  <Container>
    <Header>
      <input onBlur={(e) => setPath(e.target.value)} placeholder={"path"} />
    </Header>
    <EditorContainer>
      <Widget
        src="devs.near/widget/MonacoEditor"
        props={{
          path: path,
          onChange: setCode,
          language,
          height: "70vh",
          defaultValue,
        }}
      />
    </EditorContainer>
    <Footer>
      <button onClick={onPublish}>Publish</button>
    </Footer>
  </Container>
);
