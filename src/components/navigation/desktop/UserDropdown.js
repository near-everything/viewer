import React, { useCallback, useEffect, useState } from "react";
import { Widget, useNear, useAccount } from "near-social-vm";
import styled from "styled-components";
import { User } from "../../icons/User";
import { LogOut } from "../../icons/LogOut";
import { Withdraw } from "../../icons/Withdraw";
import { NavLink } from "react-router-dom";
import PretendModal from "../PretendModal";
import { Pretend } from "../../icons/Pretend";
import { StopPretending } from "../../icons/StopPretending";

const StyledDropdown = styled.div`
  button,
  a {
    font-weight: var(--font-weight-medium);
  }
  .dropdown-toggle {
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    height: 40px;
    background-color: transparent;
    padding: 0;

    &:after {
      margin: 0 10px;
      border-top-color: #ffffff;
    }

    img {
      border-radius: 50% !important;
      border: 1px solid white;
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
    background-color: #2d343690;
    background: radial-gradient(
      circle at 24.1% 68.8%,
      rgba(50, 50, 50, 0.8) 0%,
      rgba(0, 0, 0, 0.8) 99.4%
    );
    backdrop-filter: blur(10px);
    border-radius: 23px;
    width: 100%;
    margin-top: 10px !important;
    padding: 10px;

    li:not(:last-child) {
      margin-bottom: 10px;
    }

    button,
    a {
      font-weight: var(--font-weight-medium);
      text-transform: lowercase !important;
      display: inline-flex;
      align-items: center;
      width: 100%;
      text-align: center;
      text-decoration: none;
      background-color: #fff;
      border: 0;
      cursor: pointer;
      color: #000 !important;
      border-radius: 18px;
      padding: 8px;
      font-size: 14px;

      :hover,
      :focus {
        text-decoration: none;
        background-color: #eee;
      }

      svg {
        margin-right: 7px;
        min-width: 24px;
        path {
          stroke: #000;
        }
      }

      &.active {
        background-color: #4498e0;
        color: #fff !important;

        svg path {
          stroke: #fff;
        }
      }
    }
  }
`;

export function UserDropdown(props) {
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
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenu2222"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Widget
            src={props.widgets.profileImage}
            props={{
              accountId: account.accountId,
              className: "d-inline-block",
              style: { width: "40px", height: "40px" },
            }}
          />
          {/* {matches && (
            <>
              <div className="profile-info">
                {props.widgets.profileName && (
                  <div className="profile-name">
                    <Widget src={props.widgets.profileName} />
                  </div>
                )}
                <div className="profile-username">{account.accountId}</div>
              </div>
            </>
          )} */}
        </button>
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
              {account.accountId}
            </NavLink>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => withdrawStorage()}
            >
              <Withdraw />
              Withdraw {props.availableStorage.div(1000).toFixed(2)}kb
            </button>
          </li>
          {account.pretendAccountId ? (
            <li>
              <button
                className="dropdown-item"
                type="button"
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
                type="button"
                onClick={() => setShowPretendModal(true)}
              >
                <Pretend />
                Pretend to be another account
              </button>
            </li>
          )}
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => props.logOut()}
            >
              <LogOut />
              Sign Out
            </button>
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
}
