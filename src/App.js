import "@near-wallet-selector/modal-ui/styles.css";
import "App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "error-polyfill";
import {
  EthersProviderContext
} from "near-social-vm";
import React from "react";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { useNearContext } from "./data/near";
import { useEthersProviderContext } from "./data/web3";
import ViewPage from "./pages/ViewPage";

export const refreshAllowanceObj = {};

function App() {
  const ethersProviderContext = useEthersProviderContext();
  const nearContext = useNearContext();

  return (
    <div className="App">
      <NearContext.Provider value={nearContext}>
        <EthersProviderContext.Provider value={ethersProviderContext}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path={"/:widgetSrc*"}>
                {/* <NavigationWrapper {...passProps} /> */}
                <ViewPage {...passProps} />
              </Route>
            </Switch>
          </Router>
        </EthersProviderContext.Provider>
      </NearContext.Provider>
    </div>
  );
}

export default App;
