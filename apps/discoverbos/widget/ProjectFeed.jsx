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
        options: {
          limit: 10,
          order: "desc",
          accountId: undefined,
        },
      }}
      Item={(p) => {
        return (
          <a
            href={`/discover.near/widget/ProjectPage?projectId=${p.value.id}&creatorId=${p.accountId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Widget
              key={p}
              src={"discover.near/widget/ProjectCard"}
              props={{ projectId: p.value.id, creatorId: p.accountId }}
            />
          </a>
        );
      }}
      Layout={Flex}
    />
  </>
);
