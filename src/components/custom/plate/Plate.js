import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import {
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createItalicPlugin,
  createParagraphPlugin,
  createPlugins,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  Plate,
} from "@udecode/plate";
import { plateUI } from "./plateui";

const StyledPlate = styled(Plate)`
  &:focus-visable {
    outline: none;
  }

  div {
    &:focus-visable {
      outline: none;
    }
  }
`;

export default (props) => {
  const [debugValue, setDebugValue] = useState(null);
  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createBlockquotePlugin(),
      // createCodeBlockPlugin({
      //   // You can either pass a component per plugin
      //   component: CodeBlockElement,
      // }),
      createHeadingPlugin(),
  
      createBoldPlugin(),
      createItalicPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createCodePlugin(),
    ],
    {
      // Or pass all components at once
      components: plateUI,
    }
  );

const editableProps = {
    spellCheck: false,
    autoFocus: false,
    placeholder: 'Type…',
  };

  return (
    <StyledPlate
      {...props}
      onChange={(newValue) => {
        if (props.debug) {
          setDebugValue(newValue);
        }
        props.onChange(newValue);
      }}
      editableProps={editableProps}
      initialValue={[
        {
          type: 'p',
          children: [
            {
              text: 'This is editable plain text with react and history plugins, just like a <textarea>!',
            },
          ],
        },
      ]}
      plugins={plugins}
    >
      {props.debug && <p>value: {JSON.stringify(debugValue)}</p>}
    </StyledPlate>
  );
};
