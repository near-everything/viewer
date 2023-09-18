import React from "react";
import Header from "../header/Header";

export default function RootLayout(props) {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="container mt-2 mb-5 flex-1">{props.children}</div>
    </div>
  );
}
