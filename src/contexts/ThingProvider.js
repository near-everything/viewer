// HistoryProvider.js
import React, { useContext, useState } from "react";

const ThingContext = React.createContext();

export function ThingProvider({ children }) {
  const [thing, setThing] = useState({
    default: "efiz.near/widget/every.feed",
    thing: "every.near/widget/every.thing.view",
    create: "efiz.near/widget/creator",
    header: {
      mobile: "efiz.near/widget/every.app.header.mobile",
    },
    left: {
      menu: "efiz.near/widget/every.app.left.menu",
    },
    action: {
      button: "efiz.near/widget/every.app.action.button",
    },
  });
  return (
    <ThingContext.Provider value={{ thing, setThing }}>
      {children}
    </ThingContext.Provider>
  );
}

export function useThingContext() {
  return useContext(ThingContext);
}
