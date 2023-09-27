import { Widget } from "near-social-vm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { useQuery } from "../hooks/useQuery";
import { useBosLoaderStore } from "../stores/bos-loader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: stretch;
  padding-bottom: 48px;
`;

export default function ViewPage(props) {
  useHashRouterLegacy();
  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});
  const redirectMapStore = useBosLoaderStore();

  const src = widgetSrc || props.widgets.default;
  const setWidgetSrc = props.setWidgetSrc;
  const viewSourceWidget = props.widgets.viewSource;

  useEffect(() => {
    setWidgetProps(Object.fromEntries([...query.entries()]));
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      setWidgetSrc(
        src === viewSourceWidget && query.get("src")
          ? {
              edit: query.get("src"),
              view: null,
            }
          : {
              edit: src,
              view: src,
            }
      );
    }, 1);
  }, [src, query, setWidgetSrc, viewSourceWidget]);

  function Thing({ path }) {
    const parts = path.split("/");
    if (parts[1] === "widget") {
      return (
        <Widget
          key={path}
          config={{
            redirectMap: redirectMapStore.redirectMap,
          }}
          src={path}
          props={widgetProps}
        />
      );
    } else {
      // TODO: every.thing.view could be abstracted out
      return (
        <Widget
          key={path}
          config={{
            redirectMap: redirectMapStore.redirectMap,
          }}
          src={"every.near/widget/every.thing.view"}
          props={{ path, ...widgetProps }}
        />
      );
    }
  }

  return (
    <Container>
      <Thing path={src} />
    </Container>
  );
}
