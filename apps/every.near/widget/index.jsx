const config = {
  theme: {},
  layout: {
    src: "devs.near/widget/Layout",
    props: {
      variant: "standard",
    },
  },
  blocks: {
    // these get passed to the layout and children
    Header: () => <></>,
    Footer: () => <></>, // customize your footer
  },
  router: {
    param: "page",
    routes: {
      home: {
        path: "every.near/widget/page.home",
        blockHeight: "final",
        init: {
          name: "Home",
        },
        default: true,
      },
    },
  },
};

const PoppinsCSS = fetch(
  `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet`
).body;

const Root = styled.div`
  // you can override classnames here
  ${PoppinsCSS}
`;

return (
  <Root>
    <p>YOU DID IT</p>
    <Widget src="every.near/widget/app.view" props={{ config, ...props }} />
  </Root>
);
