import React from "react";

let id = 0;

export const mapNodeId = (nodes) => {
  
  if (!nodes || !nodes.props) {
    return []; // or return an appropriate default value or throw an error
  }
  // Convert JSX fragment into an array of elements
  const elementsArray = React.Children.toArray(nodes.props.children);

  // Map over the array of elements
  return elementsArray.map((node) => {
    id++;
    return React.cloneElement(node, { id: id.toString() });
  });
};
