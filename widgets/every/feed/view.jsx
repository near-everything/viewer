const data = props.data;

return (
  <>
    {JSON.stringify(data.typeWhitelist) === JSON.stringify(["md"]) ? (
      <Widget
        src={data.composeTemplate || "efiz.near/widget/Community.Posts.Compose"}
        props={{
          allowPublicPosting: true,
          embedHashtags: data.hashtagWhitelist,
          embedMentions: data.embedMentions,
        }}
      />
    ) : (
      <></>
    )}
    <Widget
      src="efiz.near/widget/every.post"
      props={{
        sources: data.sources,
        typeWhitelist: data.typeWhitelist,
        hashtagWhitelist: data.hashtagWhitelist,
        hashtagBlacklist: data.hashtagBlacklist,
        accountWhitelist: data.accountWhitelist,
        accountBlacklist: data.accountBlacklist,
        disableCaching: data.disableCaching,
        postTemplate: data.postTemplate,
      }}
    />
  </>
);
