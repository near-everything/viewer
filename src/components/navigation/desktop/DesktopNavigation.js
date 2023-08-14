import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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
  z-index: 1000;
  padding: 12px 0;

  .user-section {
    margin-left: auto;
    > button {
      font-size: 14px;
    }
  }

  &.sticky .container {
    background: radial-gradient(
      circle at 24.1% 68.8%,
      rgba(50, 50, 50, 0.5) 0%,
      rgb(0, 0, 0, 0.5) 99.4%
    );
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 7px;
    background-color: #2d343690;
    background: radial-gradient(
      circle at 24.1% 68.8%,
      rgb(50, 50, 50) 0%,
      rgb(0, 0, 0) 99.4%
    );
    backdrop-filter: blur(10px);
    border-radius: 200px;
    transition: background 0.2s ease-in-out;

    .user-section {
      display: flex;
      align-items: center;
      justify-content: flex-end;

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

    & > * {
      flex: 1;
    }
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    background: radial-gradient(
      circle at 24.1% 68.8%,
      rgb(210, 210, 210) 0%,
      rgb(255, 255, 255) 120%
    );
  }

  .search {
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    background: radial-gradient(
      circle at 24.1% 68.8%,
      rgb(210, 210, 210) 0%,
      rgb(255, 255, 255) 120%
    );
    border-radius: 200px;
    overflow: hidden;

    input {
      line-height: 40px;
      border: none;
      outline: none;
      box-shadow: none !important;
      width: 100%;
      color: #000;
      padding: 0 1rem;
      background: transparent;
      transition: background 0.2s ease-in-out;

      &:focus {
        background: #fff;
      }
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .left-navigation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    button {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
      background: rgba(255, 255, 255, 0);

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

export function DesktopNavigation(props) {
  const history = useHistory();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  const [sticky, setSticky] = useState(false);
  const [inputValue, setInputValue] = useState(history.location.pathname.slice(1) || '');

  useEffect(() => {
    setInputValue(history.location.pathname.slice(1));
  }, [history.location.pathname]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledNavigation className={sticky ? "sticky" : ""}>
      <div className="container">
        <div className="left-navigation">
          <Link to="/" className="logo-link">
            <div className="logo" />
          </Link>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M15 6L9 12L15 18M15 12H15.01"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              history.goForward();
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M9 6L15 12L9 18M9 12H9.01"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              // refresh
              window.location.reload();
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z"
                fill="#fff"
              />
              <path
                d="M20.8411 10.4666C20.549 10.1778 20.0789 10.1778 19.7867 10.4666L18.1005 12.1333C17.8841 12.3471 17.8184 12.6703 17.9339 12.9517C18.0495 13.233 18.3235 13.4167 18.6277 13.4167H19.5268C19.1455 17.2462 15.8759 20.25 11.8828 20.25C9.10026 20.25 6.66586 18.7903 5.31796 16.6061C5.10042 16.2536 4.63833 16.1442 4.28583 16.3618C3.93334 16.5793 3.82393 17.0414 4.04146 17.3939C5.65407 20.007 8.56406 21.75 11.8828 21.75C16.6906 21.75 20.6475 18.0892 21.0331 13.4167H22.0002C22.3043 13.4167 22.5783 13.233 22.6939 12.9517C22.8095 12.6703 22.7437 12.3471 22.5274 12.1333L20.8411 10.4666Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`/${e.target[0].value}`);
          }}
          className="search"
          style={{ display: "flex", alignItems: "stretch" }}
        >
          <input
            placeholder={"Everything"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        <div className="user-section">
          {!props.signedIn && (
            <SignInButton onSignIn={() => props.requestSignIn()} />
          )}
          {props.signedIn && (
            <>
              {matches && (
                <>
                  <Link
                    to={`/${props.widgets?.create}`}
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
