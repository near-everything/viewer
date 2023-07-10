import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useThingContext } from "../contexts/ThingProvider";

export default function ViewPage(props) {
  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});
  const { thing, setThing } = useThingContext();

  if (widgetSrc === "every.near/thing/core") {
    setThing({
      default: "efiz.near/widget/placeholder",
      create: "efiz.near/widget/placeholder",
      header: {
        mobile: "efiz.near/widget/placeholder",
      },
      left: {
        menu: "efiz.near/widget/placeholder",
      },
      action: {
        button: "efiz.near/widget/placeholder",
      },
    })
  }

  const src = widgetSrc || thing.default;
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
            src={props.widgets.thing}
            props={{ path: src, ...widgetProps }}
          />
        </div>
      </div>
    </div>
  );
}
