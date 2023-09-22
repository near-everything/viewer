import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "BOS Loader",
    href: "https://docs.near.org/bos/dev/bos-loader",
  },
  {
    name: "Jutsu.ai",
    href: "https://jutsu.ai",
  },
];

export default function Infrastructure() {
  return (
    <div>
      <Heading title="Infrastructure" />
      <Links links={links} />
    </div>
  );
}
