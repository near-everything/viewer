const { href } = VM.require("every.near/widget/utils.url") || {
  href: (v) => console.log("href: ", v),
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  // margin-top: calc(-1 * var(--body-top-padding));
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const { NavLink } = props || {
  NavLink: ({ to, children }) => (
    <Link key={to} to={`/?page=${to}`}>
      {children}
    </Link>
  ),
};

const AppHeader = ({ page, routes }) => (
  <Sidebar>
    <ButtonGroup style={{ maxHeight: "calc(100% - 50px)", overflow: "scroll" }}>
      {(Object.keys(routes) || []).map((k) => {
        const route = routes[k];
        if (route.hide) {
          return null;
        }
        return (
          <NavLink to={k}>
            <Button key={k} className={`${page === k ? "active" : ""} `}>
              <i className={route.init.icon}></i>
            </Button>
          </NavLink>
        );
      })}
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: "8px" }}>
      <NavLink to={`inspect&src=${routes[page].path}`}>
        <Button>
          <i className={"bi bi-code"}></i>
        </Button>
      </NavLink>
      <NavLink to={"notifications"}>
        <Button>
          <i className={"bi bi-bell"}></i>
        </Button>
      </NavLink>
      <div style={{ width: "48px", height: "48px" }}></div>
    </ButtonGroup>
  </Sidebar>
  // <Widget
  //   src="devhub.near/widget/devhub.components.organism.Navbar"
  //   props={{
  //     page: page,
  //     ...props,
  //   }}
  // />
);

const Footer = (props) => {
  return (
    <></>
    // <Widget
    //   src="devhub.near/widget/devhub.components.organism.NewsLetter"
    //   props={{
    //     ...props,
    //   }}
    // />
  );
};

// const [activeRoute, setActiveRoute] = useState(page);

const handleLinkClick = (path, passProps) => {
  setActiveRoute(path);
  setExtraProps(passProps);
};

// Define the new component that follows the AppLayout pattern
function AppLayout({ routes, page, children }) {
  return (
    <>
      <Container>
        <AppHeader page={page} routes={routes} />
        <ContentContainer>{children}</ContentContainer>
        <Footer page={page} />
      </Container>
    </>
  );
}

return { AppLayout };
