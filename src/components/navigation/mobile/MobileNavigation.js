import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useScrollBlock from ".././../../hooks/useScrollBlock";
import { Menu } from "./Menu";
import { Widget } from "near-social-vm";

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 50;
`;

export function MobileNavigation(props) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    setShowMenu(false);
    allowScroll();
  }, [location.pathname]);

  return (
    <>
      <Header>
        <Widget
          src={props.widgets.header.mobile}
          props={{
            ...props,
            onClickShowMenu: () => {
              setShowMenu(true);
              blockScroll();
            },
          }}
        />
      </Header>
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
