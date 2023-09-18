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
import {
  Events,
  Community,
  Education,
  Components,
  Projects,
  Opportunities,
  Integrations,
  Infrastructure,
  Gateways,
} from "./pages";

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

  const routes = [
    {
      name: "Events",
      path: "/events",
      component: <Events />,
    },
    {
      name: "Community",
      path: "/community",
      component: <Community />,
    },
    {
      name: "Education",
      path: "/education",
      component: <Education />,
    },
    {
      name: "Components",
      path: "/components",
      component: <Components />,
    },
    {
      name: "Projects",
      path: "/projects",
      component: <Projects />,
    },
    {
      name: "Opportunities",
      path: "/opportunities",
      component: <Opportunities />,
    },
    {
      name: "Integrations",
      path: "/integrations",
      component: <Integrations />,
    },
    {
      name: "Infrastructure",
      path: "/infrastructure",
      component: <Infrastructure />,
    },
    {
      name: "Gateways",
      path: "/gateways",
      component: <Gateways />,
    },
  ];

  return (
    <div className="App">
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
            {routes.map((route, index) => (
              <Router key={`router-${index}`} path={route.path}>
                {route.component}
                <Footer {...passProps} />
              </Router>
            ))}
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
    </div>
  );
}

export default App;
