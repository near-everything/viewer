// src/components/Core.js
import { Widget, useAccount, useNear } from "near-social-vm";
import { default as React, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { LogOut } from "./icons/LogOut";
import { Pretend } from "./icons/Pretend";
import { StopPretending } from "./icons/StopPretending";
import { User } from "./icons/User";
import PretendModal from "./navigation/PretendModal";

const StyledDropdown = styled.div`
  .dropdown-toggle {
    display: flex;

    &:after {
      border-top-color: var(--slate-dark-11);
    }

    img {
      border-radius: 50% !important;
    }

    .profile-info {
      margin: 5px 10px;
      line-height: normal;
      max-width: 140px;

      .profile-name,
      .profile-username {
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .profile-name {
        color: black;
      }
      .profile-username {
        color: var(--slate-dark-11);
      }
    }
  }

  ul {
    width: 100%;

    li {
      padding: 0 6px;
    }

    button,
    a {
      font-weight: var(--font-weight-medium);
      text-transform: lowercase !important;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      border: 2px outset #333;
      background-color: #f5f5f5;
      cursor: pointer;
      color: #333;
      padding: 12px;

      &:active {
        border-style: inset;
        background-color: #d5d5d5;
        color: #000;
      }

      &:hover {
        background-color: #e5e5e5;
        color: #111;
      }

      svg {
        margin-right: 7px;
        min-width: 24px;
        path {
          stroke: var(--slate-dark-9);
        }
      }
    }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Core = (props) => {
  const near = useNear();
  const account = useAccount();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const withdrawStorage = useCallback(async () => {
    await near.contract.storage_withdraw({}, undefined, "1");
  }, [near]);

  const [showPretendModal, setShowPretendModal] = React.useState(false);

  return (
    <>
      <StyledDropdown className="dropdown">
        <div
          type="button"
          id="dropdownMenu2222"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Widget
            src={"mob.near/widget/ProfileImage"}
            props={{
              accountId: account.accountId,
              className: "d-inline-block m-2",
              imageClassName: "rounded-circle w-100 h-100",
              style: { width: "42px", height: "42px" },
            }}
          />
        </div>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenu2222"
          style={{ minWidth: "fit-content" }}
        >
          <li>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/${account.accountId}`}
            >
              <User />
              my everything
            </NavLink>
          </li>
          {/* <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => withdrawStorage()}
            >
              <Withdraw />
              Withdraw {props.availableStorage.div(1000).toFixed(2)}kb
            </button>
          </li> */}
          {account.pretendAccountId ? (
            <li>
              <button
                className="dropdown-item"
                disabled={!account.startPretending}
                onClick={() => account.startPretending(undefined)}
              >
                <StopPretending />
                Stop pretending
              </button>
            </li>
          ) : (
            <li>
              <button
                className="dropdown-item"
                onClick={() => setShowPretendModal(true)}
              >
                <Pretend />
                Pretend to be another account
              </button>
            </li>
          )}
          <li>
            <button className="dropdown-item" onClick={() => props.logOut()}>
              <LogOut />
              Sign Out
            </button>
          </li>
          <li className="dropdown-item">
            <ButtonRow>
              <button>
                <i className="bi bi-arrow-left"></i>
              </button>
              <button>
                <i className="bi bi-house"></i>
              </button>
              <button>
                <i className="bi bi-arrow-right"></i>
              </button>
            </ButtonRow>
          </li>
        </ul>
      </StyledDropdown>
      <PretendModal
        show={showPretendModal}
        onHide={() => setShowPretendModal(false)}
        widgets={props.widgets}
      />
    </>
  );
};

export default Core;
