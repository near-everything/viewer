import React from "react";
import * as types from "@babel/types";
import { UIDLUtils } from "@teleporthq/teleport-shared";

const IGNORE_CHUNKS = [
  "component-types-of-props",
  "import-lib",
  "import-pack",
  "import-local",
  "export",
];

const astModifierPlugin = async (structure) => {
  const { chunks, uidl, options } = structure;
  const componentChunk = chunks.find((chunk) => chunk.name === "jsx-component");

  UIDLUtils.traverseElements(uidl.node, (element) => {
    if (element.elementType === "img" && element.key === "image") {
      const imageJSXNode = componentChunk.meta.nodesLookup[element.key];
      imageJSXNode.openingElement.name.name = "ImageWrapper";
      imageJSXNode.closingElement.name.name = "ImageWrapper";
    }
  });

  const newChunks = chunks.filter((chunk) => {
    if (IGNORE_CHUNKS.includes(chunk.name)) {
      return;
    }

    if (chunk.name === "component-default-props") {
      chunk.content.expression.left = types.identifier("props");
      chunk.linkAfter = [];
    }

    if (chunk.name === "jsx-component") {
      chunk.content = chunk.content.declarations[0].init.body.body;
      chunk.linkAfter = ["component-default-props"];
    }

    if (chunk.name === "Image") {
      chunk.name = "ImageWrapper";
      chunk.content.declarations[0].id.name = "ImageWrapper";
    }

    return chunk;
  });

  structure.chunks = newChunks.reverse();
  return structure;
};

export default astModifierPlugin;
