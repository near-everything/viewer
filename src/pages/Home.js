import React from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../stores/bos-loader";

export default function Home() {
  const redirectMapStore = useBosLoaderStore();
  return (
    <div>
      <Widget
        src="discover.near/widget/Home"
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
      />
      <div className="mx-5">
        <small>
          Edit your homepage <a href="/homepage-selector">here</a>
        </small>
      </div>
    </div>
  );
}
