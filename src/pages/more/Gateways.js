import React from "react";
import { Widget } from "near-social-vm";

export default function Gateways() {
  return (
    <div className="mb-5">
      <Widget src="itexpert120-contra.near/widget/Gateway" />
      <div className="mt-5">
        <small className="text-body-secondary">
          Add your gateways here:{" "}
          <a href="https://github.com/itexpert120/bos-gateway/blob/main/gateways.json">
            Github
          </a>
        </small>
      </div>
    </div>
  );
}
