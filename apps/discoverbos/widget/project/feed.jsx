const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (hover: none) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const { Feed } = VM.require("efiz.near/widget/Module.Feed");
Feed = Feed || (() => <></>);

return (
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
          href={`/devs.near/widget/project.page?projectId=${p.value.id}&creatorId=${p.accountId}`}
          style={{ textDecoration: "none" }}
        >
          <Widget key={p} src={"devs.near/widget/project.card"} props={p} />
        </a>
      );
    }}
    Layout={Grid}
  />
);
