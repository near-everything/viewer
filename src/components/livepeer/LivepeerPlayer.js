import React from "react";
import { Player, useAsset } from "@livepeer/react";

export const LivepeerPlayer = (props) => {
  const { data: asset } = useAsset({
    assetId: props.assetId,
  });

  return (
    <div>
      <Player
        title="Agent 327: Operation Barbershop"
        playbackId={asset.playbackId}
        showPipButton
        objectFit="cover"
        priority
      />
    </div>
  );
};
