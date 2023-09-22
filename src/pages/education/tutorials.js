import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "dApp with Near BOS, Near Social Bridge & Thirdweb/",
    href: "https://www.linkedin.com/pulse/dapp-near-bos-social-bridge-thirdweb-wenderson-pires/",
  },
  {
    name: "Near Social VM",
    href: "https://github.com/NearSocial/VM/releases/tag/2.4.0",
  },
  { name: "Near Docs", href: "http://gitHub.com/near/docs" },
  { name: "Near BOS Docs", href: "http://docs.near.org/bos" },
  {
    name: "Library that lets you build on BOS using React JS",
    href: "https://github.com/wpdas/near-social-bridge",
  },
  { name: "BOS CLI", href: "https://github.com/FroVolod/bos-cli-rs" },
  { name: "WorkSpace js", href: "https://github.com/near/workspaces-js" },
  { name: "Near SDK JS", href: "https://github.com/near/near-sdk-js" },
  {
    name: "BOS Tutorial Gateway",
    href: "https://docs.near.org/bos/tutorial/bos-gateway",
  },
  { name: "BOS educational", href: "http://docs.bos.gg/intro" },
  {
    name: "Building on BOS for users and Dev",
    href: "https://nearbuilders.com/bos",
  },
  {
    name: "Users starting with BOS",
    href: "https://banyan-collective.notion.site/For-Users-7dd27eb65e8b4753a8a3c28bd9fea81e",
  },
  {
    name: "Creating a Component",
    href: "https://banyan-collective.notion.site/Creating-a-Component-766915955ed840dca4ddbabaeef1ab41",
  },
  {
    name: "Running a component Locally",
    href: "https://banyan-collective.notion.site/Running-A-Component-Locally-c0224156ba3d45a2a6e1f2717d28aef6",
  },
  {
    name: "Building a Dapp and Composing all Widgets",
    href: "https://banyan-collective.notion.site/Building-a-Whole-dApp-Composing-All-Your-Widgets-59a93480b3274a028c721f1456967ccf",
  },
  {
    name: "Integrating Social DB into Dapps ",
    href: "https://banyan-collective.notion.site/Integrating-Social-DB-Into-Your-dApps-315b3aac48294f479e5cd7a43e16897a",
  },
  {
    name: "Running and Setting up a Gateway",
    href: "https://banyan-collective.notion.site/Running-A-Gateway-efa787d410744b2eb77ff0f6c27d68ff",
  },
  {
    name: "UX/UIDesigners guide to BOS",
    href: "https://banyan-collective.notion.site/For-Designers-83d3b5e3e1ba41c6a507ff058bbb7ac7",
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
    name: "BOS academy: BOS Gateway + VM by Matt Lockyer",
    href: "https://youtu.be/mmeDHWnavyw?si=ldh_MAwU1GWjWg7x",
  },
  {
    name: "BOS Academy: Build your First BOS Dapp by James Waugh",
    href: "https://youtu.be/2hBBUBIWjqI?si=NibRGU1o_lVQk_kL",
  },
  {
    name: "Near Social 2.0",
    href: "https://github.com/NearSocial/VM/releases/tag/2.4.0",
  },
  {
    name: "How to build a Dapp from Scratch",
    href: "https://github.com/wpdas/near-social-bridge/blob/main/examples/dapp-bos-tutorial/TUTORIAL.md",
  },
  {
    name: "How to Use IPFS to Store Your React Build App",
    href: "https://github.com/wpdas/near-social-bridge#deploying-to-ipfs-csr",
  },
  {
    name: "Jutsu.ai 1-Click BOS onboarding Flow",
    href: "https://miro.com/app/board/uXjVMpIhdAI=/?share_link_id=196640010390",
  },
  {
    name: "TypeScript Starter Project on BOS",
    href: "https://github.com/frol/bos-component-ts-starter",
  },
  {
    name: "Building Unstoppable Dapps on BOS",
    href: "https://outlierventures.io/article/building-truly-unstoppable-dapps",
  },
  {
    name: "Building LinkTree with BOS",
    href: "https://github.com/Open-Cann/lp/tree/main",
  },
  {
    name: "Keypom Developer Documentation",
    href: "https://docs.keypom.xyz/docs/next/Tutorials/Advanced/daos/introduction",
  },
  {
    name: "Deploy Your Own Linktree on BOS",
    href: "https://youtu.be/a8ULNp1q2uQ",
  },
  {
    name: "Detailed Guide to Enhancing Near BOS VM",
    href: "https://hackmd.io/@microchipgnu/extend-near-vm",
  },
  {
    name: "BOS complete APIs to Allow your Components interact with different block chains, websites and stores data",
    href: "https://docs.near.org/bos/api/home",
  },
  {
    name: " Browser for Social Data and Web4. Fork your own gateway",
    href: "https://github.com/NearSocial/viewer",
  },
  {
    name: "BonSai, How to use it",
    href: "https://hackmd.io/@microchipgnu/bonsai",
  },
  { name: "Documentation ", href: "https://docs.near.org/" },
  {
    name: "Build Web frontEnd",
    href: "https://docs.near.org/develop/integrate/frontend",
  },
  { name: "BOS Loader", href: "https://docs.near.org/bos/dev/bos-loader" },
  { name: "Near CLI", href: "http://near.cli.rs" },
];

export default function EducationTutorials() {
  return (
    <div>
      <Heading title="Library of Tutorials" />
      <Links links={links} />
    </div>
  );
}
