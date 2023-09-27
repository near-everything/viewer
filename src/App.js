import { sanitizeUrl } from "@braintree/sanitize-url";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupModal } from "@near-wallet-selector/modal-ui";
import "@near-wallet-selector/modal-ui/styles.css";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupSender } from "@near-wallet-selector/sender";
import "App.scss";
import Big from "big.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "error-polyfill";
import { useAccount, useInitNear, useNear, utils } from "near-social-vm";
import React, { useCallback, useEffect, useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ActionButton } from "./components/common/buttons/ActionButton";
import { Camera } from "./components/custom/Camera";
import { LivepeerCreator } from "./components/custom/livepeer/LivepeerCreator";
import { LivepeerPlayer } from "./components/custom/livepeer/LivepeerPlayer";
import { NavigationWrapper } from "./components/navigation/NavigationWrapper";
import { NetworkId, Widgets } from "./data/widgets";
import { useBosLoaderInitializer } from "./hooks/useBosLoaderInitializer";
import Flags from "./pages/Flags";
import ViewPage from "./pages/ViewPage";
import { KeypomScanner } from "./components/custom/KeypomScanner";
import Footer from "./components/navigation/Footer";
import { BosLoaderBanner } from "./components/BosLoaderBanner";
import { MonacoEditor } from "./components/custom/MonacoEditor";

import RootLayout from "./components/layouts/root";

// Page imports
import { EventCalendar, LibraryEvents } from "./pages/events";

import {
  GeneralCommunity,
  DeveloperCommunity,
  ProjectCommunity,
  RegionalCommunity,
} from "./pages/communities";

import { ComponentsPage } from "./pages/components";

import {
  EducationCodeReviews,
  EducationOfficeHours,
  EducationTutorials,
  EducationWorkshops,
} from "./pages/education";

import {
  OpportunitiesAccelerator,
  OpportunitiesAmplification,
  OpportunitiesFunding,
  OpportunitiesIncubation,
} from "./pages/opportunities";

import {
  ProjectsBuiltWithBOS,
  ProjectsBOSIntegration,
  ProjectsNativeProjects,
} from "./pages/projects";

import { Integrations, Infrastructure, Gateways } from "./pages/more";
import Home from "./pages/Home";
import HomeSelector from "./pages/home/HomeSelector";

export const refreshAllowanceObj = {};
const documentationHref = "https://social.near-docs.io/";

function App() {
  const [connected, setConnected] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signedAccountId, setSignedAccountId] = useState(null);
  const [availableStorage, setAvailableStorage] = useState(null);
  const [walletModal, setWalletModal] = useState(null);
  const [widgetSrc, setWidgetSrc] = useState(null);

  useBosLoaderInitializer();

  const { initNear } = useInitNear();
  const near = useNear();
  const account = useAccount();
  const accountId = account.accountId;

  // const location = window.location;

  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "c8323290-27a8-403b-858d-8baee19925c1",
    }),
  });

  useEffect(() => {
    initNear &&
      initNear({
        networkId: NetworkId,
        selector: setupWalletSelector({
          network: NetworkId,
          modules: [
            setupNearWallet(),
            setupMyNearWallet(),
            setupSender(),
            setupHereWallet(),
            setupMeteorWallet(),
            setupNeth({
              gas: "300000000000000",
              bundle: false,
            }),
          ],
        }),
        customElements: {
          Link: (props) => {
            if (!props.to && props.href) {
              props.to = props.href;
              delete props.href;
            }
            if (props.to) {
              props.to = sanitizeUrl(props.to);
            }
            return <Link {...props} />;
          },
          KeypomScanner: (props) => {
            return <KeypomScanner {...props} />;
          },
          Camera: (props) => {
            return <Camera {...props} />;
          },
          MonacoEditor: (props) => {
            return <MonacoEditor {...props} />;
          },
          LivepeerPlayer: (props) => {
            return (
              <LivepeerConfig client={livepeerClient}>
                <LivepeerPlayer {...props} />
              </LivepeerConfig>
            );
          },
          LivepeerCreator: (props) => {
            return (
              <LivepeerConfig client={livepeerClient}>
                <LivepeerCreator {...props} />
              </LivepeerConfig>
            );
          },
        },
      });
  }, [initNear]);

  // useEffect(() => {
  //   if (
  //     !location.search.includes("?account_id") &&
  //     !location.search.includes("&account_id") &&
  //     (location.search || location.href.includes("/?#"))
  //   ) {
  //     window.history.replaceState({}, "/", "/" + location.hash);
  //   }
  // }, [location]);

  useEffect(() => {
    if (!near) {
      return;
    }
    near.selector.then((selector) => {
      setWalletModal(
        setupModal(selector, { contractId: near.config.contractName })
      );
    });
  }, [near]);

  const requestSignIn = useCallback(
    (e) => {
      e && e.preventDefault();
      walletModal.show();
      return false;
    },
    [walletModal]
  );

  const logOut = useCallback(async () => {
    if (!near) {
      return;
    }
    const wallet = await (await near.selector).wallet();
    wallet.signOut();
    near.accountId = null;
    setSignedIn(false);
    setSignedAccountId(null);
  }, [near]);

  const refreshAllowance = useCallback(async () => {
    alert(
      "You're out of access key allowance. Need sign in again to refresh it"
    );
    await logOut();
    requestSignIn();
  }, [logOut, requestSignIn]);
  refreshAllowanceObj.refreshAllowance = refreshAllowance;

  useEffect(() => {
    if (!near) {
      return;
    }
    setSignedIn(!!accountId);
    setSignedAccountId(accountId);
    setConnected(true);
  }, [near, accountId]);

  useEffect(() => {
    setAvailableStorage(
      account.storageBalance
        ? Big(account.storageBalance.available).div(utils.StorageCostPerByte)
        : Big(0)
    );
  }, [account]);

  const passProps = {
    refreshAllowance: () => refreshAllowance(),
    setWidgetSrc,
    signedAccountId,
    signedIn,
    connected,
    availableStorage,
    widgetSrc,
    logOut,
    requestSignIn,
    widgets: Widgets,
    documentationHref,
  };

  const eventRoutes = [
    {
      path: "/events/calendar",
      component: <EventCalendar />,
    },
    {
      path: "/events/library",
      component: <LibraryEvents />,
    },
  ];

  const communitiesRoutes = [
    {
      path: "/communities/developer",
      component: <DeveloperCommunity />,
    },
    {
      path: "/communities/project",
      component: <ProjectCommunity />,
    },
    {
      path: "/communities/regional",
      component: <RegionalCommunity />,
    },
    {
      path: "/communities/general-bos",
      component: <GeneralCommunity />,
    },
  ];

  const educationRoutes = [
    {
      path: "/education/tutorials",
      component: <EducationTutorials />,
    },
    {
      path: "/education/code-reviews",
      component: <EducationCodeReviews />,
    },
    {
      path: "/education/workshops",
      component: <EducationWorkshops />,
    },
    {
      path: "/education/office-hours",
      component: <EducationOfficeHours />,
    },
  ];

  const componentsRoutes = [
    {
      path: "/components",
      component: <ComponentsPage />,
    },
  ];

  const projectsRoutes = [
    {
      path: "/projects/built-with-bos",
      component: <ProjectsBuiltWithBOS />,
    },
    {
      path: "/projects/native-projects",
      component: <ProjectsNativeProjects />,
    },
    {
      path: "/projects/bos-integration",
      component: <ProjectsBOSIntegration />,
    },
  ];

  const opportunitiesRoutes = [
    {
      path: "/opportunities/funding",
      component: <OpportunitiesFunding />,
    },
    {
      path: "/opportunities/accelerator",
      component: <OpportunitiesAccelerator />,
    },
    {
      path: "/opportunities/incubation",
      component: <OpportunitiesIncubation />,
    },
    {
      path: "/opportunities/amplification",
      component: <OpportunitiesAmplification />,
    },
  ];

  const routes = [
    ...eventRoutes,
    ...communitiesRoutes,
    ...educationRoutes,
    ...componentsRoutes,
    ...projectsRoutes,
    ...opportunitiesRoutes,
    {
      path: "/integrations",
      component: <Integrations />,
    },
    {
      path: "/infrastructure",
      component: <Infrastructure />,
    },
    {
      path: "/gateways",
      component: <Gateways />,
    },
    {
      path: "/homepage-selector",
      component: <HomeSelector />,
    },
  ];

  return (
    <RootLayout>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={"/flags"}>
            <Flags {...passProps} />
          </Route>
          <Route path={"/scanner"}>
            <NavigationWrapper {...passProps} />
            <KeypomScanner />
          </Route>
          <Route path={"/create"}>
            <ViewPage overrideSrc={passProps.widgets.create} {...passProps} />
            <Footer {...passProps} />
          </Route>
          {routes.map((route) => (
            <Route key={`${route.path}`} path={route.path}>
              {route.component}
              <Footer {...passProps} />
            </Route>
          ))}
          <Route exact path={"/"}>
            <Home />
            <Footer {...passProps} />
          </Route>
          <Route path={"/:widgetSrc*"}>
            <BosLoaderBanner />
            {/* <NavigationWrapper {...passProps} /> */}
            <ViewPage {...passProps} />
            <Footer {...passProps} />
            <ActionButton {...passProps} />
          </Route>
        </Switch>
      </Router>
    </RootLayout>
  );
}

export default App;
