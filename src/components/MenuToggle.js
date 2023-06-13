import React, { useState } from "react";
import { Menu } from "./navigation/mobile/Menu";
import useScrollBlock from "../hooks/useScrollBlock";

export function MenuToggle(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <>
      <button
        onClick={() => {
          setShowMenu(true);
          blockScroll();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
      </button>
      <Menu
        {...props}
        showMenu={showMenu}
        onCloseMenu={() => {
          setShowMenu(false);
          allowScroll();
        }}
      />
    </>
  );
}
