import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
`;

const Button = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  flex-shrink: 0;
  &:active {
    transform: scale(0.95);
    background-color: #ddd;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  flex-wrap: nowrap; 
`;

export const Camera = (props) => {
  const webcamRef = useRef(null);
  const windowSize = useState([window.innerWidth, window.innerHeight]);

  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  const [facingMode, setFacingMode] = useState(props.facingMode || FACING_MODE_ENVIRONMENT);

  const switchCamera = useCallback(() => {
    setFacingMode(prevState =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const videoConstraints = {
    facingMode: facingMode,
    width: windowSize[0],
    height: windowSize[1],
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.onCapture(imageSrc); // Here's the function you passed through the props
  }, [webcamRef, props.onCapture]);

  return (
    <Container>
      <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <Webcam
          audio={props.audio || false}
          width={props.width || "100%"}
          height={props.height || "100%"}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            height: '100%'
          }}
          mirrored={props.facingMode === FACING_MODE_USER ? true : false}
        />
      </div>
      <ButtonContainer>
        <Button onClick={capture}>
          Capture photo
        </Button>
        <Button onClick={switchCamera}>
          Switch Camera
        </Button>
      </ButtonContainer>
    </Container>
  );
};
