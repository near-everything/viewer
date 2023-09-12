import React from "react";
import {
  ReactStyleVariation,
  createReactComponentGenerator,
} from "@teleporthq/teleport-component-generator-react";
import * as types from "@babel/types";

const IGNORE_CHUNKS = [
  "component-types-of-props",
  "import-lib",
  "import-pack",
  "import-local",
  "export",
];

const generator = createReactComponentGenerator({
  variation: ReactStyleVariation.StyledComponents,
});

const astModifierPlugin = async (structure) => {
  const { chunks } = structure;

  const propsChunks = [];
  const styleChunks = [];
  const otherChunks = [];

  chunks.forEach((chunk) => {
    if (chunk.name.includes("props")) {
      propsChunks.push(chunk);
    } else if (chunk.name.includes("style")) {
      styleChunks.push(chunk);
    } else if (!IGNORE_CHUNKS.includes(chunk.name)) {
      otherChunks.push(chunk);
    }
  });

  const orderedChunks = [...styleChunks, ...propsChunks, ...otherChunks];

  orderedChunks.forEach((chunk) => {
    if (chunk.name === "component-default-props") {
      chunk.content.expression.left = types.identifier("props");
    }

    if (chunk.name === "jsx-component") {
      chunk.content = chunk.content.declarations[0].init.body.body[0];
    }
  });

  structure.chunks = orderedChunks;
  return structure;
};

generator.addPlugin(astModifierPlugin);

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
