import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

// const Content = styled.div`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   text-align: center;
// `;

export const Camera = (props) => {
  const webcamRef = useRef(null);
  const windowSize = useState([window.innerWidth, window.innerHeight]);

  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoConstraints = {
    facingMode: props.facingMode || FACING_MODE_ENVIRONMENT,
    width: windowSize[0],
    height: windowSize[1],
  };
  
  return (
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
        minWidth: '100%',
        minHeight: '100%',
      }}
      mirrored
    />
  );
};
