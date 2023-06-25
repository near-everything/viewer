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
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
        <button 
          onClick={capture} 
          style={{
            backgroundColor: 'white', 
            padding: '10px', 
            borderRadius: '5px', 
            border: 'none',
            marginRight: '10px',
          }}
        >
          Capture photo
        </button>
        <button 
          onClick={switchCamera} 
          style={{
            backgroundColor: 'white', 
            padding: '10px', 
            borderRadius: '5px', 
            border: 'none',
          }}
        >
          Switch Camera
        </button>
      </div>
    </Container>
  );
};
