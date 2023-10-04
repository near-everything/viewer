import React from "react";
import Heading from "../../components/header/Heading";
import Links from "../../components/pages/links";

const links = [
  {
    name: "BOS Code review: Building a Near Social bot and NFT barter application",
    href: "https://youtu.be/8-Y-eBxG_Cs?si=LlBGsWQ4G5G1T0zX",
  },
];

export default function EducationCodeReviews() {
  return (
    <div>
      <Heading title="Code Reviews" />
      <Links links={links} />
    </div>
  );
}
