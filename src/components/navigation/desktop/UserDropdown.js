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
// import { Link } from "react-router-dom";
// import { CreateWidget } from "../CreateWidget";
// import { NotificationWidget } from "../NotificationWidget";

const StyledDropdown = styled.div`
  button,
  a {
    font-weight: var(--font-weight-medium);
  }
  .dropdown-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: var(--font-weight-medium);
    text-transform: lowercase !important;
    // display: inline-block;
    text-align: center;
    text-decoration: none;
    border: 2px outset #333;
    background-color: #f5f5f5;
    cursor: pointer;
    color: #333;
    // display: flex;
    // align-items: center;
    // text-align: left;
    // // background-color: rgba(46, 51, 56, 0.8); /* Adjust the alpha value (0.8) to control transparency */
    // border-radius: 50px;
    // outline: none;
    // border: 0;
    height: 54px;

    &:after {
      margin: 0 15px;
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
    // background-color: rgba(46, 51, 56, 0.8); /* Adjust the alpha value (0.8) to control transparency */
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
      // color: var(--slate-dark-11);
      // display: flex;
      // align-items: center;
      // border-radius: 8px;
      padding: 12px;

      :hover,
      :focus {
        text-decoration: none;
        background-color: var(--slate-dark-1);
        color: white;

        svg {
          path {
            stroke: white;
          }
        }
      }

      svg {
        margin-right: 7px;
        min-width: 24px;
        path {
          stroke: var(--slate-dark-9);
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
          {matches && (
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
          )}
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
              my everything
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
          <li className="icon-buttons">
            <button className="dropdown-item" type="button">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="dropdown-item" type="button">
              <i className="bi bi-house"></i>
            </button>
            <button className="dropdown-item" type="button">
              <i className="bi bi-arrow-right"></i>
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
