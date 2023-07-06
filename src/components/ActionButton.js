import { Widget } from "near-social-vm";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const StyledActionButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;

  a {
    color: black !important;
  }
`;

export function ActionButton(props) {
  return (
    <StyledActionButton>
      <Link to="/create">
        <Widget src={props.widgets.action.button} />
      </Link>
    </StyledActionButton>
  );
}
