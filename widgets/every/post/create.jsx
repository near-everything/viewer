const typeWhitelist = props.typeWhitelist;
const key = props.key || "main";

function postThing(data) {
  // get the root thing from data
  const thing = JSON.parse(data.index.thing);
  // get the thingId
  const thingId = thing.key;
  const type = thing.value.type;
  // build the path
  const path = `${context.accountId}/thing/${thingId}`;
  // create a post referencing the thing
  data.post = {
    [key]: JSON.stringify({ path, type }),
  };
  // and tell the indexer to index the post
  data.index.post = JSON.stringify({
    key: key,
    value: {
      path,
      type,
    },
  });
  return data;
}

return (
  <Widget
    src="every.near/widget/every.thing.create"
    props={{ type: type, availableTypes: typeWhitelist, postThing: postThing }}
  />
);
