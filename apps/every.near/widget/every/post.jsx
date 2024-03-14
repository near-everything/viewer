const sources = props.sources;
const typeWhitelist = props.typeWhitelist;
const hashtagWhitelist = props.hashtagWhitelist;
const accountWhitelist = props.accountWhitelist;
const accountBlacklist = props.accountBlacklist;
const feedOrder = props.feedOrder || "desc";
const limit = props.limit || 10;
const disableCaching = props.disableCaching || false;

const { Post } = VM.require("efiz.near/widget/every.post.view"); // takes the data and renders, this can be a thing, or provided via a map.
// Post template
// template for the item in the feed...

let index = [];
const options = {
  limit: limit,
  order: feedOrder,
  accountId: accountWhitelist.length ? accountWhitelist : undefined,
};
// posts indexed via a hashtag are saved differently
// than posts indexed via a domain/action
if (hashtagWhitelist.length) {
  // get all posts saved under the hashtags
  // and we will filter domains and keys later
  index = hashtagWhitelist.map((it) => ({
    action: "hashtag",
    key: it.toLowerCase(),
    options,
  }));
} else {
  // else, get all posts saved under the domain/action key pairs
  index = sources?.map((it) => ({
    action: it.domain,
    key: it.key,
    options,
  }));
}

function extractPath(a) {
  let path;
  if (hashtagWhitelist.length) {
    // May want to revisit this again
    // The path doesn't represent where this came from
    // For example, a comment is indexed under the parent post's key
    // but is saved under a regular post/comment path
    path = a.value.path;
  } else {
    if (a.value.type === "md") {
      path = `${a.accountId}/${a.action}/${a.key}`;
    } else {
      path = a.value.path;
    }
  }
  return path;
}

const renderItem = (a) => {
  // Filter out post if account is in blacklist
  // Filter out post if type is not in whitelist
  if (
    (accountBlacklist.length && accountBlacklist.includes(a.accountId)) ||
    (hashtagWhitelist.length && !typeWhitelist.includes(a.value.type))
  ) {
    return <></>;
  }

  const path = extractPath(a);
  const blockHeight = a.blockHeight;

  if (!Post) {
    return <p>Loading...</p>;
  } else {
    return <Post path={path} blockHeight={blockHeight} />;
  }
};

return (
  <Widget
    src="efiz.near/widget/MergedIndexFeed"
    props={{ index, renderItem, disableCaching }}
  />
);
