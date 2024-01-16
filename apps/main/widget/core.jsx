const data = JSON.parse(
  Social.get("efiz.near/thing/routes", "final") || "null"
);

return (
  <Widget
    src={"every.near/widget/app"}
    props={{ data, path: "", ...props }}
  />
);