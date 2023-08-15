// src/components/Footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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
  
  font-family: 'Arial', sans-serif;
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

const Footer = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    // Do something with the address
    alert(`Navigating to: ${address}`);
  };

  return (
    <FooterWrapper className="classic">
      <Link to="/">
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
      <Input
        type="text"
        className="classic"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="browse everything..."
      />

      <Button onClick={handleSubmit}>
        <i className="bi bi-search"></i>
      </Button>
    </FooterWrapper>
  );
};

export default Footer;
