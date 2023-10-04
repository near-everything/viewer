// src/components/Footer.js
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import Core from "../Core";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  margin: 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  height: 48px;
  background-color: #fff;
  border: 2px inset #333;

  background-color: #fff;
  border: 2px inset #333;

  &:focus {
    outline: none;
    border: 2px solid #333;
  }

  font-family: "Arial", sans-serif;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: lowercase !important;
  height: 48px;
  text-align: center;
  text-decoration: none;
  border: 2px outset #333;
  background-color: #f5f5f5;
  cursor: pointer;
  color: #333;
  padding: 20px 20px;
  margin-right: 10px;
  margin-left: 4px;

  &:active {
    border-style: inset;
    background-color: #d5d5d5;
    color: #000;
  }

  &:hover {
    background-color: #e5e5e5;
    color: #111;
  }
`;

const Footer = (props) => {
  const history = useHistory();
  return (
    <FooterWrapper className="classic">
      <Core {...props} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/${e.target[0].value}`);
        }}
      >
        <Input
          type="text"
          className="classic"
          placeholder="browse everything..."
        />
        <Button type="submit">
          <i className="bi bi-search"></i>
        </Button>
      </Form>
    </FooterWrapper>
  );
};

export default Footer;
