import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { useBosLoaderStore } from "../stores/bos-loader";
import { Thing } from "../components/Thing";

export default function ViewPage(props) {
  useHashRouterLegacy();

  const { path } = useParams();
  const query = useQuery();
  const [thingProps, setThingProps] = useState({});

  const src = path || props.widgets.default;
  const setWidgetSrc = props.setWidgetSrc;
  const viewSourceWidget = props.widgets.viewSource;

  useEffect(() => {
    setThingProps(Object.fromEntries([...query.entries()]));
  }, [query]);

  // Idk what this is about and if I even need it
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
          <Thing src={src} thingProps={thingProps} />
        </div>
      </div>
    </div>
  );
}
