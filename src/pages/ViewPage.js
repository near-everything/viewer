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

  // Should move the Thing logic here

  return (
    <div className="container-xl">
      <div className="row">
        <div
          className="d-inline-block position-relative overflow-hidden"
          style={{
            "--body-top-padding": "12px",
            paddingTop: "var(--body-top-padding)",
          }}
        >
          <Widget
            key={src}
            config={{
              redirectMap: redirectMapStore.redirectMap,
            }}
            src={"efiz.near/widget/every.thing.view"}
            props={{ path: src }}
          />
        </div>
      </div>
    </div>
  );
}
