import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCreateWidget = styled.div`
  // margin: 0 15px;
  // background-color: var(--slate-dark-5);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-weight: var(--font-weight-medium);
  text-transform: lowercase !important;
  // display: inline-block;
  text-align: center;
  text-decoration: none;
  border: 2px outset #333;
  background-color: #f5f5f5;
  cursor: pointer;

  > div,
  a {
    width: 100%;
    height: 100%;
  }

  a {
    color: black !important;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 18px !important;
    }
  }

  :hover {
    a,
    i {
      color: black;
      // background-color: var(--slate-dark-5);
    }
  }
`;

export function CreateWidget({ createButtonSrc }) {
  return (
    <StyledCreateWidget className="nav-create-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
    </StyledCreateWidget>
  );
}
