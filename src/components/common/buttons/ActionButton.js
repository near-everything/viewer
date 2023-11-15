import { Widget } from "near-social-vm";
import React, { useState } from "react";
import styled from "styled-components";

const StyledActionButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 84px;
  z-index: 1000;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  background: radial-gradient(circle at 30% 30%, #4a4949, #000000);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06),
    0px 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease; // smooth transition

  &:hover {
    background: radial-gradient(circle at 70% 30%, #4a4949, #000000);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    transform: scale(0.98) translateY(4px); // scale down slightly and move downward
  }

  &:active {
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.2);
    transform: scale(0.96) translateY(6px); // more scale down and more downward movement for click
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1002;
`;

const CloseButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  float: right;
`;

function Modal({ isOpen, onClose, passProps }) {
  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalBox>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {/* focus: path */}
        <Widget src={passProps.widgets.action} props={{ focus: passProps.widgetSrc ?? passProps.widgets.default }} />
      </ModalBox>
    </ModalBackdrop>
  );
}

export function ActionButton(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <StyledActionButton onClick={toggleModal} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        passProps={props}
      />
    </>
  );
}
