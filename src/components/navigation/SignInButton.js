import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  border-radius: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 500;
`;

export function SignInButton(props) {
  return (
    <Button
      onClick={props.onSignIn}
    >
      Sign In
    </Button>
  );
}
