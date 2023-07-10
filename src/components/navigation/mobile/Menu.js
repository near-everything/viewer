import { Widget } from "near-social-vm";
import React from "react";
import styled from "styled-components";
import { useThingContext } from "../../../contexts/ThingProvider";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  transition: 350ms;
  transform: translateX(-100%);

  &.show {
    transform: translateX(0);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .left-side {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 25px;
    overflow-x: auto;
  }

  .right-side {
    flex: 20;
    opacity: 0.8;
    background-color: var(--slate-dark-1);
  }
`;

export function Menu(props) {
  // const { thing } = useThingContext(); 
  return (
    <StyledMenu className={props.showMenu ? "show" : ""}>
      <div className="left-side">
        <Widget
          src={props.widgets.left.menu}
          props={{
            requestSignIn: props.requestSignIn,
            logOut: props.logOut,
            handleCloseMenu: props.onCloseMenu,
          }}
        />
      </div>
      <div className="right-side" onClick={props.onCloseMenu} />
    </StyledMenu>
  );
}
