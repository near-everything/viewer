import { createReactComponentGenerator } from "@teleporthq/teleport-component-generator-react";
import { createBOSComponentGenerator } from "@teleporthq/teleport-component-generator-bos";
import React from "react";

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
      const generator = createBOSComponentGenerator();
      const uidl = props.getUIDL();
      const { files } = await generator.generateComponent(JSON.parse(uidl));
      props.onGenerate({ code: files[0].content });
    } catch (e) {
      props.onGenerate({ error: e.message });
      console.error("error while generating component from uidl: " + e);
    }
  }

  return <button onClick={generate}>Generate</button>;
};
