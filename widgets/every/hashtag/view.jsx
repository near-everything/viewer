const hashtag = props.hashtag;
const hashtags = hashtag.split(",")?.map((it) => it.trim());

return (
  <Widget
    src="efiz.near/widget/every.feed.view"
    props={{
      data: { hashtagWhitelist: hashtags, typeWhitelist: ["md"] },
    }}
  />
);
