import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "HackBOX: Streamline and incubate your Hackathon and get funding",
    href: "https://near.org/hackbox.near/widget/home",
  },
];

export default function OpportunitiesFunding() {
  return (
    <div>
      <Heading title="Funding Opportunities" />
      <Links links={links} />
    </div>
  );
}
