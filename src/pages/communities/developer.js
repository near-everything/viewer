import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "Near DevHUB",
    href: "https://neardevhub.org/",
  },
  {
    name: "BOS VM DEV",
    href: "https://t.me/NearSocialDev/",
  },
  {
    name: "BOS Decentralised Frontend",
    href: "https://t.me/NEARisBOS/",
  },
  {
    name: "Jutsu.ai",
    href: "http://nearbuilders.com/tg-nearpad/",
  },
  {
    name: "DiscoverBOS Tg",
    href: "https://t.me/Discover_BOS/",
  },
  {
    name: "Near BuildDao",
    href: "https://nearbuilders.com/tg-builders/",
  },
  {
    name: "NearHacks",
    href: "https://x.com/NEARHACKS?t=d7Q3epo2FUMsgs6xWE4ZXw&s=09/",
  },
  {
    name: "BanyanUS",
    href: "https://x.com/BanyanUS?t=mwhMakGXc1P1prWl0lFmfw&s=09/",
  },
  {
    name: "Near Balkans",
    href: "https://near.org/near/widget/ProfilePage?accountId=nearbalkans.near&utm_source=Linktree&utm_medium=Button&utm_campaign=NBH-BOS/",
  },
  {
    name: "Hack.nearsocial",
    href: "https://www.youtube.com/watch?v=iYHMP2bg1-4/",
  },
];

export default function DeveloperCommunity() {
  return (
    <div>
      <Heading title="Developer Communities" />
      <Links links={links} />
    </div>
  );
}
