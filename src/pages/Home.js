import React from "react";
import { Widget } from "near-social-vm";

export default function Home() {
  return (
    <div>
      <Widget src="itexpert120-contra.near/widget/Homepage" />
      <small>
        Edit your homepage <a href="/homepage-selector">here</a>
      </small>
    </div>
  );
}
