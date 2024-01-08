import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SESSION_STORAGE_REDIRECT_MAP_KEY = "nearSocialVMredirectMap";

function Viewer(props) {
  const { code } = props;
  const { path } = useParams();
  const [passProps, setPassProps] = useState({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setPassProps(
      Array.from(searchParams.entries()).reduce((props, [key, value]) => {
        props[key] = value;
        return props;
      }, {})
    );
  }, [location]);

  let src;

  if (!code) {
    // prioritize code if provided
    src = path || "efiz.near/thing/5ac821ac";
    if (src) {
      src = src.substring(src.lastIndexOf("/", src.indexOf(".near")) + 1);
    } else {
      console.log("why am I here?");
      src = "every.near/widget/app";
    }
  }

  const [redirectMap, setRedirectMap] = useState(null);
  useEffect(() => {
    (async () => {
      const localStorageFlags = JSON.parse(localStorage.getItem("flags"));

      if (localStorageFlags?.bosLoaderUrl) {
        setRedirectMap(
          (await fetch(localStorageFlags.bosLoaderUrl).then((r) => r.json()))
            .components
        );
      } else {
        setRedirectMap(
          JSON.parse(sessionStorage.getItem(SESSION_STORAGE_REDIRECT_MAP_KEY))
        );
      }
    })();
  }, []);

  return (
    <>
      <Widget
        src={"every.near/widget/thing"}
        code={code}
        props={{
          path: src,
          ...passProps,
        }}
        config={{ redirectMap }}
      />
    </>
  );
}

export default Viewer;
