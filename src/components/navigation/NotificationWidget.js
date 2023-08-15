import React from "react";
import styled from "styled-components";
import { Widget } from "near-social-vm";

const StyledNotificationWidget = styled.div`
  margin: 0 15px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-weight: var(--font-weight-medium);
  text-transform: lowercase !important;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(210, 210, 210) 0%,
    rgb(255, 255, 255) 120%
  );

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

export function NotificationWidget({ notificationButtonSrc }) {
  return (
    <StyledNotificationWidget className="nav-notification-btn">
      <Widget src={notificationButtonSrc} />
    </StyledNotificationWidget>
  );
}
