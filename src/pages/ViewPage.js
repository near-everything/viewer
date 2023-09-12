import { Widget } from "near-social-vm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Overlay from "../components/Overlay";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { useQuery } from "../hooks/useQuery";
import { useBosLoaderStore } from "../stores/bos-loader";
import Thing from "../components/Thing";

export default function ViewPage(props) {
  const passProps = props;
  useHashRouterLegacy();

  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});

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

  return (
    <>
      <div className="row">
        <div
          className="d-inline-block position-relative overflow-hidden"
          style={{
            "--body-bottom-padding": "68px",
            paddingBottom: "var(--body-bottom-padding)",
          }}
        >
          <Thing path={src} widgetProps={widgetProps} />
          <Overlay {...passProps} />
        </div>
      </div>
    </>
  );
}
