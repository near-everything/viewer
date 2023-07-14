import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import Draggable from "react-draggable";

export default function ViewPage(props) {
  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});
  const [elements, setElements] = useState([]);

  const handleCreateElement = () => {
    const newElement = {
      id: Date.now(),
      content: (
        <iframe src="https://near.social/#/embed/efiz.near/widget/Tree" />
        // <div
        //   className="d-inline-block position-relative overflow-hidden"
        //   style={{
        //     "--body-top-padding": "12px",
        //     paddingTop: "var(--body-top-padding)",
        //   }}
        // >
        //   <Widget
        //     key={src}
        //     src={props.widgets.thing}
        //     props={{ path: src, ...widgetProps }}
        //   />
        // </div>
      ),
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleRemoveElement = (id) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };

  const src = widgetSrc || props.overrideSrc || props.widgets.default;
  const setWidgetSrc = props.setWidgetSrc;
  const viewSourceWidget = props.widgets.viewSource;

  useEffect(() => {
    setWidgetProps(Object.fromEntries([...query.entries()]));
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      setWidgetSrc(
        src === viewSourceWidget && query.get("src")
          ? {
              edit: query.get("src"),
              view: null,
            }
          : {
              edit: src,
              view: src,
            }
      );
    }, 1);
  }, [src, query, setWidgetSrc, viewSourceWidget]);

  
  return (    
    <div className="canvas">
      <button onClick={handleCreateElement}>Create Element</button>
      {elements.map((element) => (
        <Draggable key={element.id}>
          <div className="draggable-element">
            <div className="draggable-handle">
              <button onClick={() => handleRemoveElement(element.id)}>
                Remove
              </button>
            </div>
            <div className="draggable-content">{element.content}</div>
          </div>
        </Draggable>
      ))}
    </div>
  );
}
