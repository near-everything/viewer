import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { ActionButton } from "../components/common/buttons/ActionButton";
import Footer from "../components/navigation/Footer";
import Thing from "./Thing";

const Canvas = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 10px;
  overflow: hidden;
`;

const DraggableElement = styled.div`
  position: absolute;
`;

const DraggableHandle = styled.div`
  border: 2px solid #000;
  height: 20px;
  cursor: move;
`;

const DraggableContent = styled.div`
  margin-top: 10px;
`;

function Overlay(props) {
  const [elements, setElements] = useState([]);

  const handleCreateElement = (e) => {
    const id = Date.now();

    const xOffset = Math.random() * 400 - 200;
    const yOffset = Math.random() * 400 - 200;

    const canvasCenterX = window.innerWidth / 2;
    const canvasCenterY = window.innerHeight / 2 - 200;

    const newElement = {
      id,
      content: (
        <div
          className="d-inline-block position-relative overflow-hidden"
          style={{
            "--body-top-padding": "12px",
            paddingTop: "var(--body-top-padding)",
          }}
        >
          <Thing path={e.src} key={e.src + id} widgetProps={{ path: e.src }} />
        </div>
      ),
      position: {
        x: canvasCenterX + xOffset,
        y: canvasCenterY + yOffset,
      },
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleRemoveElement = (id) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };

  return (
    <>
      <Canvas>
        {elements.map((element) => (
          <Draggable key={element.id} defaultPosition={element.position}>
            <DraggableElement>
              <DraggableHandle>
                <button onClick={() => handleRemoveElement(element.id)}>
                  Remove
                </button>
              </DraggableHandle>
              <DraggableContent>{element.content}</DraggableContent>
            </DraggableElement>
          </Draggable>
        ))}
      </Canvas>
      <Footer {...props} />
      <ActionButton
        onClick={() =>
          handleCreateElement({ src: "voyager.near/widget/index" })
        }
      />
    </>
  );
}

export default Overlay;
