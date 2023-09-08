import React, { useEffect, useState } from "react";
import { createComponentGenerator } from "@teleporthq/teleport-component-generator";
import reactComponentPlugin from "@teleporthq/teleport-plugin-react-base-component";
import styledComponentsPlugin from "@teleporthq/teleport-plugin-react-styled-components";
import importStatementsPlugin from "@teleporthq/teleport-plugin-import-statements";
import prettierJS from "@teleporthq/teleport-postprocessor-prettier-js";

import reactMapping from "./react-mapping";

const generator = createComponentGenerator();

generator.addMapping(reactMapping);

generator.addPlugin(reactComponentPlugin);
generator.addPlugin(styledComponentsPlugin);
generator.addPlugin(importStatementsPlugin);
generator.addPostProcessor(prettierJS);

export const TeleportGeneratorPseudoReact = (props) => {
  async function generate() {
    try {
      const uidl = props.getUIDL();
      const { files } = await generator.generateComponent(JSON.parse(uidl));
      props.onGenerate({
        code: files[0].content,
      });
    } catch (e) {
      props.onGenerate({ error: e.message });
      console.error(`error while generating component from uidl: ${e}`);
    }
  }

  return <button onClick={generate}>Generate</button>;
};
