import React from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../../stores/bos-loader";

export default function HomeSelector() {
  const redirectMapStore = useBosLoaderStore();

  return (
    <div>
      <Widget
        src="itexpert120-contra.near/widget/HomepageSelector"
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
      />
    </div>
  );
}
