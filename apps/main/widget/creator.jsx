const { page, tab, ...passProps } = props;

const { routes } = {
  type: "app",
  routes: {
    write: {
      path: "devs.near/widget/app",
      blockHeight: "final",
      init: {
        action: "write",
      },
    },
    draw: {
      path: "everycanvas.near/widget/index",
      blockHeight: "final",
      init: {
        action: "draw",
        path: undefined,
      },
    },
  },
};

const { ToggleLayout } = VM.require("every.near/widget/template.toggle") || {
  ToggleLayout: () => <></>,
};

// const { Router } = VM.require("devs.near/widget/Router") || {
//   Router: () => <></>,
// }

if (!page) page = Object.keys(routes)[0] || "write";

const Root = styled.div``;

function Router({ active, routes }) {
  // this may be converted to a module at devs.near/widget/Router
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return <p>404 Not Found</p>;
    }
  }

  return (
    <div key={active} style={{ pointerEvents: "all" }}>
      <Widget
        src={src}
        props={{
          currentPath: `/buildhub.near/widget/app?page=${page}`,
          page: tab,
          ...passProps,
          ...defaultProps,
        }}
      />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

return (
  <Root>
    <Container>
      <ToggleLayout
        basePath="/every.near/widget/creator"
        page={page}
        routes={routes}
        {...props}
      >
        <Content>
          <Router
            basePath="/every.near/widget/creator"
            active={page}
            routes={routes}
            passProps={passProps}
          />
        </Content>
      </ToggleLayout>
    </Container>
  </Root>
);
