const [historyStack, setHistoryStack] = useState([]);
const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
const [path, setPath] = useState(
  props.path ?? "hack.near/widget/dev.social"
);
const [content, setContent] = useState(path);

const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 62px;
  z-index: 10000;
`;

const Form = styled.div`
  flex: 1;
  display: flex;
  margin: 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  height: 48px;
  background-color: #fff;
  border: 2px outset #333;

  &:focus {
    outline: none;
    border: 2px solid #333;
  }

  font-family: "Arial", sans-serif;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: lowercase !important;
  height: 48px;
  text-align: center;
  text-decoration: none;
  border: 2px outset #333;
  background-color: #f5f5f5;
  cursor: pointer;
  color: #333;
  padding: 20px 20px;
  margin-right: 10px;
  margin-left: 4px;

  &:active {
    border-style: inset;
    background-color: #d5d5d5;
    color: #000;
  }

  &:hover {
    background-color: #e5e5e5;
    color: #111;
  }
`;

const updateButtons = () => {
  return (
    <>
      {/* <ButtonRow>
        <ArrowButton></ArrowButton>
        <ArrowButton></ArrowButton>
      </ButtonRow> */}
      <Button
        className={`font-bold py-2 px-4 ${
          currentHistoryIndex <= 0 ? "disabled" : ""
        }`}
        disabled={currentHistoryIndex <= 0}
        onClick={handleBack}
      >
        <i className="bi bi-arrow-left" />
      </Button>
      <Button>
        <Link type="button" to={"/"}>
          <i className="bi bi-house"></i>
        </Link>
      </Button>
      <Button
        className={`font-bold py-2 px-4 ${
          currentHistoryIndex >= historyStack.length - 1 ? "disabled" : ""
        }`}
        disabled={currentHistoryIndex >= historyStack.length - 1}
        onClick={handleForward}
      >
        <i className="bi bi-arrow-right" />
      </Button>
      <Input
        id="pathInput"
        className="classic"
        type="text"
        placeholder="path"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <Button disabled={!path.trim()} onClick={handleSubmit}>
        <i className="bi bi-search" />
      </Button>
      {/* <Button>
        <Widget
          src="mob.near/widget/N.StarButton"
          props={{
            item: {
              type: "social",
              path: path,
            },
            notifyAccountId: path && path.length && path.split("/")[0],
            tooltip: false,
            titleStar: `Bookmark this app`,
            titleUnstar: `Remove from bookmarks`,
          }}
        />
      </Button> */}
      <Button
        className={`font-bold py-2 px-4 ${
          currentHistoryIndex <= 0 ? "disabled" : ""
        }`}
        disabled={currentHistoryIndex <= 0}
        onClick={handleBack}
      >
        <i className="bi bi-arrow-left" />
      </Button>
      {context.accountId && (
        <Widget
          src={"mob.near/widget/ProfileImage"}
          props={{
            accountId: context.accountId,
            className: "d-inline-block m-2",
            imageClassName: "rounded-circle w-100 h-100",
            style: { width: "42px", height: "42px" },
          }}
        />
      )}
    </>
  );
};

const handleBack = () => {
  if (currentHistoryIndex > 0) {
    setCurrentHistoryIndex(currentHistoryIndex - 1);
    setContent(historyStack[currentHistoryIndex - 1]);
  }
};

const handleForward = () => {
  if (currentHistoryIndex < historyStack.length - 1) {
    setCurrentHistoryIndex(currentHistoryIndex + 1);
    setContent(historyStack[currentHistoryIndex + 1]);
  }
};

const handleSubmit = () => {
  const trimmedPath = path.trim();
  if (trimmedPath) {
    const newHistoryStack = historyStack.slice(0, currentHistoryIndex + 1);
    newHistoryStack.push(trimmedPath);
    setHistoryStack(newHistoryStack);
    setCurrentHistoryIndex(currentHistoryIndex + 1);
    setContent(trimmedPath);
  }
};

return (
  <div className="bg-gray-100">
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Header className="classic">{updateButtons()}</Header>
        <div
          id="content"
          className="p-4 border-t border-gray-300"
          style={{ marginTop: "62px" }}
          key={content}
        >
          <Widget src={content} />
        </div>
      </div>
    </div>
  </div>
);
