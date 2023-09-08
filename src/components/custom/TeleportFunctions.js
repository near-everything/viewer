import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

function convertStyledSyntax(input) {
  // Change styled('element')({ на styled.element\`
  const updatedInput = input
    .replace(/styled\('(\w+)'\)\(\{/g, (match, element) => {
      return `styled.${element}\``;
    })
    .replace(/\}\)/g, "`")
    .replace(/'/g, "");

  return updatedInput;
}
export default function splitReactCode(sourceCode) {
  const ast = parser.parse(sourceCode, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  let jsxComponent = "";
  let defaultProps = "";
  let stylesComponent = "";
  let stateComponent = "";

  traverse(ast, {
    JSXElement(path) {
      if (path.parentPath.isReturnStatement()) {
        jsxComponent = sourceCode.slice(
          path.parentPath.node.start,
          path.parentPath.node.end
        );
      }
    },
    AssignmentExpression(path) {
      if (
        path.get("left").isMemberExpression() &&
        path.get("left.property").node.name === "defaultProps"
      ) {
        defaultProps = sourceCode.slice(path.node.start, path.node.end);
        defaultProps = defaultProps.replace(
          /^[^\s]+\.defaultProps\s*/,
          "props"
        );
      }
    },

    CallExpression(path) {
      if (path.get("callee.name").node === "styled") {
        const declaration = path.findParent((path) =>
          path.isVariableDeclaration()
        );
        stylesComponent +=
          sourceCode.slice(declaration.node.start, declaration.node.end) + "\n";
      } else if (path.get("callee.name").node === "useState") {
        const declaration = path.findParent((path) =>
          path.isVariableDeclaration()
        );
        stateComponent +=
          sourceCode.slice(declaration.node.start, declaration.node.end) + "\n";
      }
    },
  });

  const stylesComponentEdited = convertStyledSyntax(stylesComponent);
  return (
    stylesComponentEdited +
    "\n\n" +
    defaultProps +
    "\n\n" +
    // stateComponent +
    "\n\n" +
    jsxComponent
  );
}
