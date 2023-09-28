import React from "react";
// import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Footer from "./Footer";

export default function RootLayout(props) {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <div className="mt-2 mb-5 flex-1">
        <div style={{ maxWidth: "100%" }}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}
