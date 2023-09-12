import { Widget } from "near-social-vm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Overlay from "../components/Overlay";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { useQuery } from "../hooks/useQuery";
import { useBosLoaderStore } from "../stores/bos-loader";

function Thing({ path, widgetProps }) {
  const redirectMapStore = useBosLoaderStore();
  
  const jsonString = // this should happen in the Browser thing
    '{"devhub": "devgovgigs.near/widget/Ideas", "form builder": "devgovgigs.near/widget/gigs-board.pages.Post?id=1098"}';
  const jsonObject = JSON.parse(jsonString);

  const myMap = new Map(Object.entries(jsonObject));

  path = path.trim();
  if (myMap.has(path)) {
    path = myMap.get(path);
  }

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
        props={{
          path,
          ...widgetProps,
        }}
      />
    );
  }
}

export default Thing;