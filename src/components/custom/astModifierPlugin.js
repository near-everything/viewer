import React from "react";
import * as types from "@babel/types";

const IGNORE_CHUNKS = [
  "component-types-of-props",
  "import-lib",
  "import-pack",
  "import-local",
  "export",
];

const astModifierPlugin = async (structure) => {
  const { chunks } = structure;

  const newChunks = chunks.filter((chunk) => {
    if (IGNORE_CHUNKS.includes(chunk.name)) {
      return false;
    }

    if (chunk.name === "component-default-props") {
      chunk.content.expression.left = types.identifier("props");
      chunk.linkAfter = [];
    }

    if (chunk.name === "jsx-component") {
      chunk.content = chunk.content.declarations[0].init.body.body;
      chunk.linkAfter = ["component-default-props"];
      chunk.content[0].argument.children.forEach((node) => {
        if (node.openingElement?.name?.name === "Image") {
          node.openingElement.name = types.JSXIdentifier("Img");
        }
      });
    }
    if (chunk.name === "Image") {
      chunk.content.declarations[0].id = types.identifier("Img");
    }

    return true;
  });

  structure.chunks = newChunks.reverse();
  console.log(structure.chunks);
  return structure;
};

export default astModifierPlugin;
