const { route, ...passProps } = props;

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
  height: 48px;

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

const defaultRoute = "efiz.near/widget/Things.index";
const [selectedItem, setSelectedItem] = useState(route || defaultRoute);

const handleItemClick = (item) => {
  setSelectedItem(item);
};

const routes = [
  {
    path: "efiz.near/widget/Tree",
    icon: "bi bi-house",
  },
  {
    path: "efiz.near/widget/Things.index",
    icon: "bi bi-globe",
  },
  {
    path: "chaotictempest.near/widget/Search",
    icon: "bi bi-search",
  },
  {
    path: "create.near/widget/home",
    icon: "bi bi-hammer",
  },
  {
    path: "itexpert120-contra.near/widget/Events",
    icon: "bi bi-calendar",
  },
  {
    path: "mob.near/widget/N",
    icon: "bi bi-people",
  },
  {
    path: "hack.near/widget/Map.tutorial",
    icon: "bi bi-map",
  },
  {
    path: "mintbase.near/widget/nft-marketplace",
    icon: "bi bi-cart",
  },
  {
    path: "devs.near/widget/Module.Feed.demo",
    icon: "bi bi-boxes",
  },
  {
    path: "efiz.near/widget/voyager.index",
    icon: "bi bi-rocket",
  },
  {
    path: "efiz.near/widget/App.index",
    icon: "bi bi-camera-video",
  },
  {
    path: "hyperfiles.near/widget/app",
    icon: "bi bi-files",
  },
  {
    path: "efiz.near/widget/SocialGraph",
    icon: "bi bi-stars",
  },
];

return (
  <Container>
    <Sidebar>
      <ButtonGroup>
        {routes.map((route) => (
          <Button onClick={() => handleItemClick(route.path)}>
            <i className={route.icon}></i>
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
      <Button
          onClick={() => handleItemClick(`mob.near/widget/WidgetSource?src=${selectedItem}`)}
        >
          <i className={"bi bi-code"}></i>
        </Button>
        <Button
          onClick={() => handleItemClick("mob.near/widget/NotificationFeed")}
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
      <Widget src={selectedItem} props={passProps} />
    </Content>
  </Container>
);

// // Import our modules
// const { AppLayout } = VM.require(
//   "devhub.near/widget/devhub.components.templates.AppLayout"
// );

// if (!AppLayout) {
//   return <p>Loading modules...</p>;
// }

// // CSS styles to be used across the app.
// // Define fonts here, as well as any other global styles.
// const Theme = styled.div`
//   a {
//     color: inherit;
//   }

//   .attractable {
//     box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
//     transition: box-shadow 0.6s;

//     &:hover {
//       box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
//     }
//   }
// `;

// if (!page) {
//   // If no page is specified, we default to the feed page TEMP
//   page = "home";
// }

// // This is our navigation, rendering the page based on the page parameter
// function Page() {
//   const routes = page.split(".");
//   switch (routes[0]) {
//     case "home": {
//       return (
//         <Widget src="devhub.near/widget/devhub.page.home" props={passProps} />
//       );
//     }
//     // ?page=communities
//     case "communities": {
//       return (
//         <Widget
//           src={"devhub.near/widget/devhub.page.communities"}
//           props={passProps}
//         />
//       );
//     }
//     // ?page=community
//     case "community": {
//       return (
//         // Considering to consolsidate this into a single widget,
//         // where each level handles its own routing.
//         // Modularizing a page just like we do with addons
//         <Widget
//           src={"devhub.near/widget/devhub.entity.community.Provider"}
//           props={{
//             ...passProps,
//             Children: (p) => {
//               // passing props from the Provider into the Children
//               switch (routes[1]) {
//                 // ?page=community.configuration
//                 case "configuration": {
//                   return (
//                     <Widget
//                       src={
//                         "devhub.near/widget/devhub.page.community.configuration"
//                       }
//                       props={{
//                         ...passProps,
//                         ...p,
//                       }}
//                     />
//                   );
//                 }
//                 // ?page=community
//                 default: {
//                   return (
//                     <Widget
//                       src={"devhub.near/widget/devhub.page.community.index"}
//                       props={{
//                         ...passProps,
//                         ...p,
//                       }}
//                     />
//                   );
//                 }
//               }
//             },
//           }}
//         />
//       );
//     }
//     // ?page=feed
//     case "feed": {
//       return (
//         <Widget src={"devhub.near/widget/devhub.page.feed"} props={passProps} />
//       );
//     }
//     // ?page=create
//     case "create": {
//       return (
//         <Widget
//           src={"devhub.near/widget/devhub.page.create"}
//           props={passProps}
//         />
//       );
//     }
//     // ?page=about
//     case "about": {
//       return (
//         <Widget
//           src={"devhub.near/widget/devhub.page.about"}
//           props={passProps}
//         />
//       );
//     }
//     case "contribute": {
//       return (
//         <Widget
//           src={"devhub.near/widget/devhub.page.contribute"}
//           props={passProps}
//         />
//       );
//     }
//     case "profile": {
//       return (
//         <Widget
//           src={"devhub.near/widget/devhub.page.profile"}
//           props={passProps}
//         />
//       );
//     }
//     // ?page=blog
//     case "blog": {
//       return (
//         <Widget src={"devhub.near/widget/devhub.page.blog"} props={passProps} />
//       );
//     }
//     case "post": {
//       return (
//         <Widget src={"devhub.near/widget/devhub.page.post"} props={passProps} />
//       );
//     }
//     case "admin": {
//       return (
//         <Widget
//           src={"devhub.near/widget/devhub.page.admin.index"}
//           props={passProps}
//         />
//       );
//     }
//     default: {
//       // TODO: 404 page
//       return <p>404</p>;
//     }
//   }
// }

// return (
//   <Theme>
//     <AppLayout page={page}>
//       <Page />
//     </AppLayout>
//   </Theme>
// );
