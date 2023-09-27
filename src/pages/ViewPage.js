import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { useBosLoaderStore } from "../stores/bos-loader";

export default function ViewPage(props) {
  useHashRouterLegacy();

  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});
  const redirectMapStore = useBosLoaderStore();

  const src = widgetSrc || props.overrideSrc || props.widgets.default;
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
    <div className="row">
      <div
        className="d-inline-block position-relative"
        style={{
          "--body-bottom-padding": "68px",
          paddingBottom: "var(--body-bottom-padding)",
        }}
      >
        <Thing path={src} />
      </div>
    </div>
  );
}
