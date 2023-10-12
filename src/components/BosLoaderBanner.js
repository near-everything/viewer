import styled from "styled-components";

import { useFlags } from "../hooks/useFlags";
import { useBosLoaderStore } from "../stores/bos-loader";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Button = styled.button`
  all: unset;
  display: block;
  height: 16px;
  line-height: 16px;
  color: #664d04;

  border-radius: 100rem;

  &:active,
  &:hover {
    outline: none;
    border: none;
  }
`;

const Floating = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 1.5rem;

  z-index: 1000;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 50rem;
  padding: 8px 16px;
  text-align: center;

  background: #fff2cd;
  color: #664d04;

  @media screen and (max-width: 800px) {
    top: 4rem;
    right: 0.5rem;
  }
`;

const Container = styled.a`
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

export function BosLoaderBanner() {
  const redirectMapStore = useBosLoaderStore();
  const [flags, setFlags] = useFlags();

  function closeBanner() {
    if (flags?.bosLoaderUrl) {
      setFlags({ bosLoaderUrl: undefined });
    }
  }

  if (!redirectMapStore.loaderUrl) return null;

  return (
    <OverlayTrigger
      key={"bos-loader"}
      placement={"bottom"}
      overlay={
        <Tooltip>
          {redirectMapStore.failedToLoad
            ? "Check console.log. CORS errors may be misleading"
            : redirectMapStore.loaderUrl}
        </Tooltip>
      }
    >
      <Floating>
        <Container href={"/flags"}>
          {redirectMapStore.failedToLoad
            ? "BOS Loader fetch error"
            : "Loading components"}
        </Container>
        <Button type="button" onClick={closeBanner}>
          <i className="bi bi-x" />
        </Button>
      </Floating>
    </OverlayTrigger>
  );
}