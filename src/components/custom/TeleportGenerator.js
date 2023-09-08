import React from "react";
import {
  createReactComponentGenerator,
  ReactMapping,
} from "@teleporthq/teleport-component-generator-react";
import styledComponentsPlugin from "@teleporthq/teleport-plugin-react-styled-components";
import cssPlugin from "@teleporthq/teleport-plugin-css";
import splitReactCode from "./TeleportFunctions";

const customMapping = {
  ...ReactMapping,
  elements: {
    img: {
      elementType: "widget",
    },
  },
  elements: {
    nav: {
      elementType: "div",
    },
  },
  events: {
    click: "onclick",
  },

  illegalClassNames: [...ReactMapping.illegalClassNames, "nav"],
};

export const TeleportGenerator = (props) => {
  async function generate() {
    try {
      const generator = createReactComponentGenerator();
      generator.addMapping(customMapping);
      generator.addPlugin(styledComponentsPlugin);
      const uidl = props.getUIDL();
      const { files } = await generator.generateComponent(JSON.parse(uidl));
      props.onGenerate({ code: splitReactCode(files[0].content) });
      //props.onGenerate({ code: files[0].content });
    } catch (e) {
      props.onGenerate({ error: e.message });
      console.error("error while generating component from uidl: " + e);
    }
  }

  return <button onClick={generate}>Generate</button>;
};
