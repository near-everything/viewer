import React from "react";
import { GrayBorderButton } from "../common/buttons/GrayBorderButton";

export function SignInButton(props) {
  return (
    <button onClick={props.onSignIn}>
      Sign In
    </button>
  );
}
