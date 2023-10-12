const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  flex-wrap: wrap;
`;

const { Feed } = VM.require("efiz.near/widget/Module.Feed");
Feed = Feed || (() => <></>);

return (
  <>
    <div className="my-3">
      <h2>Projects built with BOS</h2>
    </div>
    <Feed
      index={{
        action: "every",
        key: "group", // TODO: change to project 
        options: { // nft:mrbrownnft.near
          limit: 10,
          order: "desc",
          accountId: undefined,
        },
      }}
      Item={(p) => {
        return (
          <a // How could we move this to the module?
            href={`/every.near/widget/thing?projectId=${p.value.id}&creatorId=${p.accountId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Widget
              key={p}
              src={"every.near/widget/project.card"}
              props={{ projectId: p.value.id, creatorId: p.accountId }}
            />
          </a>
        );
      }}
      Layout={Flex}
    />
  </>
);
