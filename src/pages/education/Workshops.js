import React from "react";
import Heading from "../../components/header/Heading";
import Links from "../../components/pages/links";

const links = [
  {
    name: "Case for BOS",
    href: "https://youtu.be/Z3mVpZiy_gc?si=tPgPJc1ShGBk-ieq",
  },
  {
    name: "Building BOS gateway in 5mins",
    href: "https://youtu.be/xAygBTn3SPY?si=7BR7JZUYQJvjlTbO",
  },
  {
    name: "BOS Technical Workshop with Illia Polosukhin",
    href: "https://youtu.be/yzGuZkORR3I?si=VUZHmf4-vxpnQHy7",
  },
  {
    name: "Decentralised FRONTEND on near",
    href: "https://www.youtube.com/watch?v=iYHMP2bg1-4",
  },
  {
    name: "BOS Academy: Build your First BOS Dapp by James Waugh",
    href: "https://youtu.be/2hBBUBIWjqI?si=NibRGU1o_lVQk_kL",
  },
  {
    name: "BOS academy: BOS Gateway + VM by Matt Lockyer",
    href: "https://youtu.be/mmeDHWnavyw?si=ldh_MAwU1GWjWg7x",
  },
  {
    name: "BOS Academy BOS chain Design Patterns by Manzanal Spanish content",
    href: "https://youtu.be/IJjoTAIr4Pk?si=NWmLpUTGOms8co2Q",
  },
  {
    name: "BOS Academy: Building anything with Everything by Elliot",
    href: "https://youtu.be/DukrdJtZtSU?si=HlvFtWiKEzx-XUV4",
  },
  {
    name: "Integrating Soul Bound Token",
    href: "https://youtu.be/60RXbaWxu90",
  },
  {
    name: "BOS Community group call 1",
    href: "https://youtu.be/pFN6wpT5htI?si=D04LuUTJzWeUfM2f",
  },
  {
    name: "Calimero Network  Discusses what lacking on BOS ",
    href: "https://twitter.com/CalimeroNetwork/status/1702672634436092383?t=zRQC8JFzneMojq0n2118Qg&s=19",
  },
  {
    name: "Deploy Your Own Lintree on BOS",
    href: "https://youtu.be/a8ULNp1q2uQ",
  },
  {
    name: "BOS demo to Non tech people",
    href: "https://youtu.be/14c8tAsbLdo?si=HuQzXKQ_5IaNghAL",
  },
  {
    name: "Decencentralise your Game with BOS on Near",
    href: "https://youtu.be/RYGNBjdnYfg?si=oxx1EhRwFuNoyO-Q",
  },
  {
    name: "*Open Sprints on Building on *BOS for Project Managers",
    href: "https://youtu.be/RsxuLJi5EvU?si=Gpn3_VazcZc2mpV7",
  },
  {
    name: "*Top Influencers on BOS",
    href: "https://youtu.be/R1aZdG_m2dQ?si=h1jrjbuq6miL6OP0",
  },
  {
    name: "*How to see Who Are building what on BOS",
    href: "https://youtu.be/a2RuTZDr8_c?si=G6mazurxyVrmkTWE",
  },
];

export default function EducationWorkshops() {
  return (
    <div>
      <Heading title="Workshops" />
      <Links links={links} />
    </div>
  );
}
