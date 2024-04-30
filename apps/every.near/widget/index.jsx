const widgets = {
  navbar: "${config_account}/widget/components.navbar",
};

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
    Header: () => (
      <>
        <Widget src={widgets.navbar} props={{ routes: config.router.routes, page: props.page }} />
      </>
    ),
    Footer: () => <></>, // customize your footer
  },
  router: {
    param: "page",
    routes: {
      home: {
        path: "${config_account}/widget/page.home",
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

const lightTheme = `
  --bg: #fff;
  --color: #0D0D0D;
  --stroke: #e2e2e2;

  /* buttons */
  --btn-primary-bg: #171717;
  --btn-primary-color: #fff;
  --btn-secondary-bg: #fff;
  --btn-secondary-stroke: #DBDBDB;
  --btn-secondary-color: #171717;
  --btn-tertiary-color: #6F6F6F;
  --btn-primary-hover-bg: #6F6F6F;
  --btn-secondary-hover-bg: #FCFCFC;
  --btn-secondary-hover-stroke: #C7C7C7;
  --btn-tertiary-hover-bg: #F8F8F8;
  --btn-tertiary-danger-hover-bg: #FF050508;
  --btn-primary-disabled-bg: #C7C7C7;
  --btn-secondary-disabled-stroke: #DBDBDB;
  
  /* dropdown */
  --dropdown-button-color: #1c2024;
  --separator-color: #e2e2e2;

  /* app card */
  --app-card-disabled-bg: #c7c7c7;

  /* badge */
  --badge-alpha-black-color: #171717;

  /* chip */
  --chip-bg: #f3f3f3;
  --chip-color: #171717;
  --chip-hover-bg: #e8e8e8;
  --chip-selected-bg: #171717;
  --chip-selected-color: #fff;
  --chip-selected-icon: #dbdbdb;
  --chip-selected-hover-bg: #6f6f6f;
  
  /* danger buttons */
  --btn-primary-danger-bg: #DC3D43;
  --btn-secondary-danger-stroke: #F3AEAF;
  --btn-secondary-danger-color: #CD2B31;
  `;

const darkTheme = `
  --bg: #0D0D0D;
  --color: #fff;
  --stroke: #343434;

  /* buttons */
  --btn-primary-bg: #fff;
  --btn-primary-color: #161616;
  --btn-secondary-bg: #0D0D0D;
  --btn-secondary-stroke: #505050;
  --btn-secondary-color: #EDEDED;
  --btn-tertiary-color: #A0A0A0;
  --btn-primary-hover-bg: #EDEDED;
  --btn-secondary-hover-bg: #161616;
  --btn-secondary-hover-stroke: #505050;
  --btn-tertiary-hover-bg: #1C1C1C;
  --btn-tertiary-danger-hover-bg: rgba(253, 40, 21, 0.05);
  --btn-primary-disabled-bg: #505050;
  --btn-secondary-disabled-stroke: #3E3E3E;

  /* dropdown */
  --dropdown-button-color: #C7C7C7;
  --separator-color: #2c2c2c;

  /* app card */
  --app-card-disabled-bg: #1c1c1c;

  /* badge */
  --badge-alpha-black-color: #f7f7f7;

  /* chip */
  --chip-bg: #f3f3f3;
  --chip-color: #171717;
  --chip-hover-bg: #e8e8e8;
  --chip-selected-bg: #171717;
  --chip-selected-color: #fff;
  --chip-selected-icon: #dbdbdb;
  --chip-selected-hover-bg: #6f6f6f;
  
  /* danger buttons */
  --btn-primary-danger-bg: #F2555A;
  --btn-secondary-danger-stroke: #AA2429;
  --btn-secondary-danger-color: #FF6369;
`;

const profile = Social.getr(`${context.accountId}/profile`);
const theme = profile.every.theme ?? "light";

const Root = styled.div`
  /* font imports */
  ${PoppinsCSS}

  /* theme */
  ${theme === "light" ? lightTheme : darkTheme}
  
  /* defaults */
  font-family: Poppins, sans-serif;
`;

return (
  <Root>
    <Widget src="${config_account}/widget/app.view" props={{ config, ...props }} />
  </Root>
);
