/**
 * Every app is structured the same
 */
const { page, layout, loading, routes, ...passProps } = props;

// const { AppLayout } =
//   VM.require("devhub.near/widget/devhub.components.templates.AppLayout") ||
//   (() => {});

if (!page) page = "home";

const Theme = styled.div`
  a {
    color: inherit;
  }
`;

const [extraProps, setExtraProps] = useState({});

function Router({ active, routes }) {
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      // If the route has special initializations, you can add them to extraProps
      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return <p>404 Not Found</p>;
    }
  }

  return (
    <Widget
      src="every.near/widget/thing"
      props={{ ...passProps, ...extraProps, path: src }}
    />
  );
}

// return (
//   <Theme>
//     <AppLayout page={page}>
//       <Router active={page} routes={routes} />
//     </AppLayout>
//   </Theme>
// );

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 64px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  border: 2px outset #333;
  background-color: #f5f5f5;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  width: 48px;
  min-height: 48px;

  border: 2px outset #333;
  background-color: #f5f5f5;
  cursor: pointer;
  color: #333;

  text-decoration: none;

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

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const [activeRoute, setActiveRoute] = useState(page);

const handleLinkClick = (path, passProps) => {
  setActiveRoute(path);
  setExtraProps(passProps);
};

return (
  <Container>
    <Sidebar>
      <ButtonGroup
        style={{ maxHeight: "calc(100% - 50px)", overflow: "scroll" }}
      >
        {(Object.keys(routes) || []).map((k) => {
          const route = routes[k];
          if (route.hide) {
            return null;
          }
          return (
            <Button key={k} onClick={() => handleLinkClick(k)}>
              <i className={route.init.icon}></i>
            </Button>
          );
        })}
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: "8px" }}>
        <Button
          onClick={() => handleLinkClick("inspect", { src: routes[activeRoute].path })}
        >
          <i className={"bi bi-code"}></i>
        </Button>
        <Button
          onClick={() =>
            handleLinkClick("notifications")
          }
        >
          <i className={"bi bi-bell"}></i>
        </Button>
        <div style={{ width: "48px", height: "48px" }}></div>
      </ButtonGroup>
    </Sidebar>
    <Content>
      <Router active={activeRoute} routes={routes} />
    </Content>
  </Container>
);
