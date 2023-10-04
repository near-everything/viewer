import { createReactClient } from "@livepeer/core-react/client";
import { studioProvider } from "@livepeer/core-react";
import React, { createContext, useContext, useMemo } from "react";

// Create context
export const LivepeerContext = createContext();

export function LivepeerProvider({ children }) {
  const livepeerClient = useMemo(
    () =>
      createReactClient({
        provider: studioProvider({
          apiKey: "c8323290-27a8-403b-858d-8baee19925c1", // Consider moving this to an environment variable for security
        }),
      }),
    []
  );

  return (
    <LivepeerContext.Provider value={livepeerClient}>
      {children}
    </LivepeerContext.Provider>
  );
}

// Custom hook for convenience
export function useLivepeer() {
  const context = useContext(LivepeerContext);
  if (!context) {
    throw new Error("useLivepeer must be used within a LivepeerProvider");
  }
  return context;
}
