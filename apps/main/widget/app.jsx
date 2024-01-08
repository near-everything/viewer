/**
 * Every app is structured the same
 */

const { page, layout, loading, ...passProps } = props;

const { AppLayout } =
  VM.require("devhub.near/widget/devhub.components.templates.AppLayout") ||
  (() => {});

if (!AppLayout) return <Widget src={loading} loading={<p>Loading...</p>} />;
if (!page) page = "home";

const Theme = styled.div`
  a {
    color: inherit;
  }
`;

const routes = {
  home: {
    path: "hack.near/widget/dev.social",
    blockHeight: "final",
    init: {
      icon: "bi bi-house",
    },
  },
  discover: {
    path: "efiz.near/widget/Things.index",
    blockHeight: "final",
    init: {
      icon: "bi bi-globe",
    },
  },
  tree: {
    path: "efiz.near/widget/Tree",
    blockHeight: "final",
    init: {
      icon: "bi bi-tree",
    },
  },
  search: {
    path: "chaotictempest.near/widget/Search",
    blockHeight: "final",
    init: {
      icon: "bi bi-search",
    },
  },
  create: {
    path: "create.near/widget/home",
    blockHeight: "final",
    init: {
      icon: "bi bi-plus-circle",
    },
  },
  events: {
    path: "itexpert120-contra.near/widget/Events",
    blockHeight: "final",
    init: {
      icon: "bi bi-calendar",
    },
  },
  editor: {
    path: "every.near/widget/editor",
    blockHeight: "final",
    init: {
      icon: "bi bi-pencil",
    },
  },
  hashtag: {
    path: "efiz.near/widget/every.hashtag",
    blockHeight: "final",
    init: {
      icon: "bi bi-hash",
    },
  },
  social: {
    path: "mob.near/widget/N",
    blockHeight: "final",
    init: {
      icon: "bi bi-people",
    },
  },
  map: {
    path: "hack.near/widget/Map.tutorial",
    blockHeight: "final",
    init: {
      icon: "bi bi-map",
    },
  },
  marketplace: {
    path: "mintbase.near/widget/nft-marketplace",
    blockHeight: "final",
    init: {
      icon: "bi bi-cart",
    },
  },
  blocks: {
    path: "devs.near/widget/Module.Feed.demo",
    blockHeight: "final",
    init: {
      icon: "bi bi-boxes",
    },
  },
  voyager: {
    path: "efiz.near/widget/voyager.index",
    blockHeight: "final",
    init: {
      icon: "bi bi-rocket",
    },
  },
  video: {
    path: "efiz.near/widget/App.index",
    blockHeight: "final",
    init: {
      icon: "bi bi-camera-video",
    },
  },
  files: {
    path: "hyperfiles.near/widget/app",
    blockHeight: "final",
    init: {
      icon: "bi bi-files",
    },
  },
  graph: {
    path: "efiz.near/widget/SocialGraph",
    blockHeight: "final",
    init: {
      icon: "bi bi-stars",
    },
  },
  plugins: {
    path: "embeds.near/widget/Plugin.Index",
    blockHeight: "final",
    init: {
      icon: "bi bi-plug",
    },
  },
  build: {
    path: "buildhub.near/widget/Feed",
    blockHeight: "final",
    init: {
      icon: "bi bi-hammer",
    },
  },
  music: {
    path: "jaswinder.near/widget/MusicPlayer-Harmonic",
    blockHeight: "final",
    init: {
      icon: "bi bi-music-note",
    },
  },
};

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
      props={{ path: src, ...passProps, ...extraProps }}
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

const handleLinkClick = (path) => {
  setActiveRoute(path);
};

return (
  <Container>
    <Sidebar>
      <ButtonGroup
        style={{ maxHeight: "calc(100% - 50px)", overflow: "scroll" }}
      >
        {(Object.keys(routes) || []).map((k) => {
          const route = routes[k];
          return (
            <Button key={k} onClick={() => handleLinkClick(k)}>
              <i className={route.init.icon}></i>
            </Button>
          );
        })}
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: "8px" }}>
        <Button
          onClick={() =>
            handleLinkClick({
              path: "mob.near/widget/WidgetSource",
              props: { src: activeRoute },
            })
          }
        >
          <i className={"bi bi-code"}></i>
        </Button>
        <Button
          onClick={() =>
            handleLinkClick({ path: "mob.near/widget/NotificationFeed" })
          }
        >
          <i className={"bi bi-bell"}></i>
        </Button>
        <Widget
          src={"mob.near/widget/ProfileImage"}
          props={{
            accountId: account.accountId,
            className: "d-inline-block",
            imageClassName: "rounded-circle w-100 h-100",
            style: { width: "42px", height: "42px" },
          }}
        />
      </ButtonGroup>
    </Sidebar>
    <Content>
      <Router active={activeRoute} routes={routes} />
    </Content>
  </Container>
);
