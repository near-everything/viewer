/**
 * The goal for this is to be a wrapper for the Feed module
 * It takes an Item, data source, and Layout
 * Handles all the rest. Provides infinite scroll, etc.
 */

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  flex-wrap: wrap;
`;

const { Feed } = VM.require("efiz.near/widget/Module.Feed");

if (!Feed) {
  return <p>Loading...</p>
}

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
        console.log(p);
        return (
          <a // How could we move this to the module?
            href={`/discover.near/widget/ProjectPage?projectId=${p.value.id}&creatorId=${p.accountId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Widget
              key={p}
              src={"discover.near/widget/project"}
              props={{ projectId: p.value.id, creatorId: p.accountId }}
            />
          </a>
        );
      }}
      Layout={Flex}
    />
  </>
);
