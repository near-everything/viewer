import React from "react";
// import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Footer from "./Footer";

export default function RootLayout(props) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="flex-grow-1">
        <div style={{ maxWidth: "100%" }}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}
