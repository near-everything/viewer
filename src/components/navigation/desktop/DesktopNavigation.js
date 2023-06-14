import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { CreateWidget } from "../CreateWidget";
import { NotificationWidget } from "../NotificationWidget";
import { SignInButton } from "../SignInButton";
import { UserDropdown } from "./UserDropdown";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  // background-color: var(--slate-dark-1);
  z-index: 1000;
  padding: 12px 0;

  .user-section {
    margin-left: auto;
    > button {
      font-size: 14px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-section {
      display: flex;
      align-items: center;

      .nav-create-btn {
        margin-left: 10px;
      }

      .nav-sign-in-btn {
        margin-left: 10px;
      }
    }

    .arrow-up-right {
      margin-left: 4px;
    }
  }

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export function DesktopNavigation(props) {
  const history = useHistory();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <StyledNavigation>
      <div className="container">
        <Link to="/" className="logo-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="64px"
            height="64px"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>
        </Link>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              history.push(`/${e.target[0].value}`);
            }}
            className="search"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <input
              placeholder="path"
              style={{ fontSize: "2em", width: "100%" }}
              onFocus={() => {}}
            />
            <button type="submit" style={{ height: "auto" }}>
              <span>&#10140;</span>
            </button>
          </form>
        </div>
        {/*
        <div className="navigation-section">
          <NavigationButton route="/">Home</NavigationButton>
          <NavigationButton route="/edit">Editor</NavigationButton>
          <NavigationButton href={props.documentationHref}>
            Docs
            <ArrowUpRight />
          </NavigationButton>
        </div> */}
        <div className="user-section">
          {/* <DevActionsDropdown {...props} /> */}
          {!props.signedIn && (
            <SignInButton onSignIn={() => props.requestSignIn()} />
          )}
          {props.signedIn && (
            <>
              {matches && (
                <>
                  {" "}
                  <Link
                    to={props.widgets?.create}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CreateWidget
                      createWidgetSrc={props.widgets.createButton}
                    />
                  </Link>
                  <NotificationWidget
                    notificationButtonSrc={props.widgets.notificationButton}
                  />
                </>
              )}
              <UserDropdown {...props} />
            </>
          )}
        </div>
      </div>
    </StyledNavigation>
  );
}
