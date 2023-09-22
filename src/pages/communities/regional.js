import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "Near San Francesco",
    href: "https://x.com/NEAR__SF?t=_4mnzICRvSYWRakgk4AZ5w&s=09/",
  },
  {
    name: "Near NYC",
    href: "https://x.com/NEAR__NYC?t=WREvsFzmSHHxZ5Fu9b8Rkw&s=09/",
  },
  {
    name: "BanYan US",
    href: "https://x.com/BanyanUS?t=mwhMakGXc1P1prWl0lFmfw&s=09/",
  },
  {
    name: "Near Balkans",
    href: "https://near.org/near/widget/ProfilePage?accountId=nearbalkans.near&utm_source=Linktree&utm_medium=Button&utm_campaign=NBH-BOS/",
  },
  {
    name: "Near Vietam Hub",
    href: "https://linktr.ee/nearvietnamhub/",
  },
  {
    name: "Near Ukraine",
    href: "https://linktr.ee/nearuaguild/",
  },
  {
    name: "Near Africa",
    href: "https://t.me/NEAR_Africa/1/",
  },
  {
    name: "Near Hausa",
    href: "https://t.me/NearHausa/",
  },
  {
    name: "Open Web Academy",
    href: "#",
  },
  {
    name: "Near Turkiye",
    href: "#",
  },
];

export default function RegionalCommunity() {
  return (
    <div>
      <Heading title="Regional Communities" />
      <Links links={links} />
    </div>
  );
}
