import React from "react";
import { createReactComponentGenerator } from "@teleporthq/teleport-component-generator-react";
import styledComponents from "@teleporthq/teleport-plugin-react-styled-components";
import Mapping from "./BOS-mapping.json";
import astModifierPlugin from "./astModifierPlugin";

export const TeleportGenerator = (props) => {
  async function generateReact() {
    try {
      const generator = createReactComponentGenerator();
      const uidl = props.getUIDL();
      const { files } = await generator.generateComponent(JSON.parse(uidl));
      props.onGenerate({ code: files[0].content });
    } catch (e) {
      props.onGenerate({ error: e.message });
      console.error("error while generating component from uidl: " + e);
    }
  }

  async function generateBOS() {
    try {
      const generator = createReactComponentGenerator();
      generator.addMapping(Mapping);
      generator.addPlugin(styledComponents);
      generator.addPlugin(astModifierPlugin);
      const uidl = props.getUIDL();
      const { files } = await generator.generateComponent(JSON.parse(uidl));
      props.onGenerate({ code: files[0].content });
    } catch (e) {
      props.onGenerate({ error: e.message });
      console.error("error while generating component from uidl: " + e);
    }
  }

  return <button onClick={generateBOS}>Generate</button>;
};
