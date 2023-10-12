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
    <Widget
      src="devs.near/widget/Compose"
      props={{
        index: {
          post: JSON.stringify([
            {
              key: {
                id: projectId,
                type: "thing",
              },
              value: {
                type: "md",
              },
            },
          ]),
        },
      }}
    />
    <Feed
      index={[
        {
          action: "post",
          key: {
            type: "thing",
            path: `${creatorId}/thing/${projectId}`,
          },
          options: {
            limit: 10,
            order: "desc",
            accountId: props.accounts,
          },
          cacheOptions: {
            ignoreCache: true,
          },
        },
        {
          action: "repost",
          key: JSON.stringify({
            type: "thing",
            path: `${creatorId}/thing/${projectId}`,
          }),
          options: {
            limit: 10,
            order: "desc",
            accountId: props.accounts,
          },
          cacheOptions: {
            ignoreCache: true,
          },
        },
      ]}
      Item={(p) => (
        <Widget
          loading={<div className="w-100" style={{ height: "200px" }} />}
          src="mob.near/widget/MainPage.N.Post"
          props={{ accountId: p.accountId, blockHeight: p.blockHeight }}
        />
      )}
    />
  </>
);
