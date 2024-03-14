import { Player } from "@livepeer/react";
import React from "react";

export const LivepeerPlayer = ({
  title,
  playbackId,
  PosterImage,
  showPipButton,
  objectFit,
  priority,
  ...props
}) => {
  if (!playbackId) {
    return <p>Please provide a playback Id.</p>;
  }

  return (
    <Player
      title={title}
      playbackId={playbackId}
      poster={PosterImage}
      showPipButton={showPipButton}
      objectFit={objectFit}
      priority={priority}
      {...props}
    />
  );
};
