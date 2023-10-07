import Editor from "@monaco-editor/react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import React, { useCallback, useState } from "react";

export const MonacoEditor = (props) => {
  const { defaultValue, path, language, onChange } = props;
  const [code, setCode] = useState(defaultValue);

  const reformat = useCallback(
    (code) => {
      try {
        const formattedCode = prettier.format(code, {
          parser: language === "json" ? "json" : "babel",
          plugins: [parserBabel],
        });
        updateCode(formattedCode);
      } catch (e) {
        console.log(e);
      }
    },
    [updateCode]
  );

  const updateCode = useCallback(
    (code) => {
      setCode(code);
      onChange(code);
    },
    [setCode]
  );

  return (
    <Editor
      defaultValue={defaultValue}
      value={code}
      path={path}
      height={"100%"}
      defaultLanguage={language}
      onChange={(code) => updateCode(code)}
      wrapperProps={{
        onBlur: () => reformat(code),
      }}
    />
  );
};
