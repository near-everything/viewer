// index may be a string like : "post:main" or "post:main,repost:main" (in which case, it will build an array)
// or it may be an object like { action: "post", key: "main", options: { limit: 10, order: "desc" } } (in which case, we pass it directly )
// accounts may be an array of accountIds, a single accountId, or a comma separated string of accountIds
// options may be an object or a string like : "limit:10,order:desc" (in which case, it will build an object)
const { index, accounts, item, options } = props;

if (!index) index = "post:main";
if (!accounts) accounts = undefined;
if (!item) item = "every.near/widget/post";
if (!options)
  options = {
    limit: 10,
    order: "desc",
  };

const { Feed } = VM.require("devs.near/widget/Feed") || {
  Feed: () => <></>,
};

const parseIndex = (index) => {
  const parsedIndex = typeof index === "string" ? index.split(",") : [index];
  return parsedIndex.map((indexItem) => {
    const [action, key] = indexItem.split(":");
    return {
      action,
      key,
      options: {
        ...parseOptions(options),
        accountId: Array.isArray(accounts)
          ? accounts
          : (accounts && accounts.split(",")) || undefined,
      },
    };
  });
};

const parseOptions = (options) => {
  if (typeof options === "string") {
    const optionsObject = {};
    options.split(",").forEach((option) => {
      const [key, value] = option.split(":");
      optionsObject[key.trim()] = value.trim();
    });
    return optionsObject;
  } else {
    return options;
  }
};

return (
  <Feed
    index={parseIndex(index)}
    Item={(p) => {
      return (
        <Widget
          key={JSON.stringify(p)}
          src={item}
          loading={<div style={{ height: "200px" }} />}
          props={{ accountId: p.accountId, blockHeight: p.blockHeight }}
        />
      );
    }}
  />
);
