import { useCreateAsset } from "@livepeer/react";
import React, { useEffect } from "react";

export const LivepeerCreator = ({
  name,
  video,
  metadata,
  Button,
  handleStatus,
  handleProgress,
  handleError,
  handleAssets,
  ipfs = true,
}) => {
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [
            {
              name: video.name,
              file: video,
              storage: {
                ipfs,
                metadata: metadata,
              },
            },
          ],
        }
      : null
  );

  useEffect(() => {
    handleStatus(status);
  }, [status]);

  useEffect(() => {
    handleProgress(progress);
  }, [progress]);

  useEffect(() => {
    handleError(error);
  }, [error]);

  useEffect(() => {
    handleAssets(assets);
  }, [assets]);

  return (
    <Button
      disabled={status === "loading" || !createAsset}
      onClick={() => {
        createAsset?.();
      }}
    />
  );
};
