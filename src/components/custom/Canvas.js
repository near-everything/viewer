import { Tldraw, menuItem, toolbarItem  } from "@tldraw/tldraw";
import React, { useCallback, useEffect, useState } from "react";
import { ThingShapeTool } from "./tldraw/ThingShapeTool";
import { ThingShapeUtil } from "./tldraw/ThingShapeUtil";

function Canvas(props) {
  const [editor, setEditor] = useState();
  const setAppToState = useCallback((editor) => {
    setEditor(editor);
  }, []);

  const shapes = { card: { util: ThingShapeUtil } };
  const tools = [ThingShapeTool];

  useEffect(() => {
    if (!editor) return;

    editor.on("change", (change) => props.handleChangeEvent(change));

    return () => {
      editor.off("change", (change) => props.handleChangeEvent(change));
    };
  }, [editor]);

  const handleUiEvent = useCallback((name, data) => {
    if (props.handleUiEvent) {
      props.handleUiEvent(name, data);
    }
  }, []);

  return (
    <Tldraw
      persistenceKey={props.persistenceKey}
      autoFocus={props.autoFocus}
      hideUi={props.hideUi}
      onMount={setAppToState}
      onUiEvent={handleUiEvent}
      // tools={tools}
      // shapes={shapes}
      // overrides={{
        // In order for our custom tool to show up in the UI...
        // We need to add it to the tools list. This "toolItem"
        // has information about its icon, label, keyboard shortcut,
        // and what to do when it's selected.
        // tools(editor, tools) {
        //   tools.card = {
        //     id: "card",
        //     icon: "color",
        //     label: "Card",
        //     kbd: "c",
        //     readonlyOk: false,
        //     onSelect: () => {
        //       editor.setSelectedTool("card");
        //     },
        //   };
        //   return tools;
        // },
        // toolbar(_app, toolbar, { tools }) {
        //   // The toolbar is an array of items. We can add it to the
        //   // end of the array or splice it in, then return the array.
        //   toolbar.splice(4, 0, toolbarItem(tools.card));
        //   return toolbar;
        // },
        // keyboardShortcutsMenu(_app, keyboardShortcutsMenu, { tools }) {
        //   // Same for the keyboard shortcuts menu, but this menu contains
        //   // both items and groups. We want to find the "Tools" group and
        //   // add it to that before returning the array.
        //   const toolsGroup = keyboardShortcutsMenu.find(
        //     (group) => group.id === "shortcuts-dialog.tools"
        //   );
        //   toolsGroup.children.push(menuItem(tools.card));
        //   return keyboardShortcutsMenu;
        // },
      // }}
    />
  );
}

{
  /* <Container>
      <div className="tldraw__editor">
      </div>
    </Container> */
}
export default Canvas;
