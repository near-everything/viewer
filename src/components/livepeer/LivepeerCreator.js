import React from "react";

export const LivepeerCreator = (props) => {
  if (props.onChange) {
    props.onChange("test");
  }

  return (
    <div>
      <button onClick={() => props.onChange("test")}>test</button>
    </div>
  );
};
