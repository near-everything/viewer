import React, { useCallback, useState } from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../stores/bos-loader";
import styled from "styled-components";

export const Thing = (props) => {
  const redirectMapStore = useBosLoaderStore();
  const { src, thingProps } = props;

  const Container = styled.div`
    border: 1px solid #ccc;
    height: fit-content;
  `;

  const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid #ccc;
  `;

  const IconBox = styled.div`
    font-family: "Times New Roman";
    font-size: 2em;
    line-height: 1.25;
    font-weight: 400;
    cursor: pointer;
  `;

  const Content = styled.div`
    padding: 1px;
    min-height: 300px;
  `;

  const Button = styled.button`
    text-transform: lowercase !important;
  `;

  const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 4px;
  `;

  function Modifier() {
    const renderIcon = () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
    };

    function createButton(key, data) {
      // const stateVal = state.view === key ? "active" : "inactive";
      // if (data.creatorRequired && context.accountId !== creatorId) {
      //   return <></>;
      // } else {
      //   return (
      //     <button
      //       className={"btn"}
      //       onClick={() =>
      //         State.update({ view: stateVal === "active" ? "THING" : key })
      //       }
      //     >
      //       <i className={data.state[stateVal].icon}></i>
      //       {data.state[stateVal].label}
      //     </button>
      //   );
      // }
    }

    return (
      <Widget
        src="efiz.near/widget/Common.Dropdown"
        props={{
          renderIcon: renderIcon,
          elements: []
            // type === "widget"
            //   ? [nearPad()]
            //   : Object.keys(plugins)?.map((it) =>
            //       createButton(it, plugins[it])
            //     ),
        }}
      />
    );
  }

  return (
    <Container id={src}>
      <Header>
        <ButtonRow>
          <Modifier />
        </ButtonRow>
      </Header>
      <Content>
        <Widget
          key={src}
          config={{
            redirectMap: redirectMapStore.redirectMap,
          }}
          src={src}
          props={thingProps}
        />
      </Content>
    </Container>
  );
};
