const { Feed } = VM.require("devs.near/widget/Feed") || {
  Feed: () => <></>,
};

return (
  <div>
    <Feed
      index={{
        action: "post",
        key: "main",
        options: {
          limit: 10,
          order: "desc",
          subscribe: true,
        },
      }}
      Item={(p) => <p>{JSON.stringify(p)}</p>}
    />
  </div>
);
