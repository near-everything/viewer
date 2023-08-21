import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { useBosLoaderStore } from "../stores/bos-loader";
import styled from "styled-components";

export default function ViewPage(props) {
  useHashRouterLegacy();

  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});
  const redirectMapStore = useBosLoaderStore();
  const [showModal, setShowModal] = useState(true);

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


  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function isPWA() {
    return (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches);
  }

  useEffect(() => {
    if (isMobile() && !isPWA()) {
      setShowModal(true);
    }
  }, []);

  function Thing({ path }) {
    const parts = path.split("/");
    if (parts[1] === "widget") {
      return (
        <Widget
          key={path}
          config={{
            redirectMap: redirectMapStore.redirectMap,
          }}
          src={path}
          props={widgetProps}
        />
      );
    } else {
      // TODO: every.thing.view could be abstracted out
      return (
        <Widget
          key={path}
          config={{
            redirectMap: redirectMapStore.redirectMap,
          }}
          src={"every.near/widget/every.thing.view"}
          props={{ path, ...widgetProps }}
        />
      );
    }
  }

  return (
    <div className="">
      <div className="row">
        <div
          className="d-inline-block position-relative overflow-hidden"
          style={{
            "--body-top-padding": "12px",
            "--body-bottom-padding": "68px",
            paddingTop: "var(--body-top-padding)",
            paddingBottom: "var(--body-bottom-padding)",
          }}
        >
          <Thing path={src} />
        </div>
        {showModal && <AddToHomeScreenModal />}
      </div>
    </div>
  );
}

function AddToHomeScreenModal() {
  const StyledModal = styled.div`
  display: block; // This will make the modal visible
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  overflow: hidden;
  outline: 0;
`;

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  max-width: 500px; // You can adjust this value
  margin-right: auto;
  margin-left: auto;
  pointer-events: none;
  top: 50%;
  transform: translateY(-50%);
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`;

  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  return (
    <StyledModal tabIndex="100">
      <ModalDialog>
        <ModalContent>
          <div className="modal-header">
            <h5 className="modal-title">Add to Home Screen</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {isIOS() && isSafari() && <p>Instructions for adding to home screen on iOS Safari...</p>}
            {isIOS() && !isSafari() && <p>Please open this site in Safari to add to home screen.</p>}
            {!isIOS() && <p>Instructions for adding to home screen on Android...</p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </ModalContent>
      </ModalDialog>
    </StyledModal>
  );
}
