const { Router } = VM.require("devs.near/widget/Router") || {
  Router: () => <></>,
};

const Root = styled.div`
  
`;

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const App = ({
  routes,
  Layout,
  basePath,
  page,
  defaultPage,
  debug,
  depth,
  ...passProps
}) => {
  if (!page) page = Object.keys(routes)[0] || defaultPage;

  return (
    <Root>
      <Router
        basePath={basePath}
        active={page}
        routes={routes}
        passProps={passProps}
        depth={depth ?? 1}
        PageNotFound={() => <p>404 Not Found</p>} // routes[404]
        children={(routerProps) => (
          <Container>
            <Layout
              page={tab}
              routes={routes}
              {...routerProps}
              {...props}
              Outlet={() => {
                if (debug) {
                  return (
                    <div>
                      <pre>{JSON.stringify(routerProps, null, 2)}</pre>
                      <pre>{JSON.stringify(props, null, 2)}</pre>
                    </div>
                  );
                } else {
                  return (
                    <Content>
                      <Widget src={routerProps.src} props={routerProps} />
                    </Content>
                  );
                }
              }}
            />
          </Container>
        )}
      />
    </Root>
  );
};

return { App };
