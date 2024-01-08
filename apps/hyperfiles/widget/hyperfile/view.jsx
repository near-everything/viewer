// const { Thing } =
//   VM.require("devs.near/widget/Thing") ||
//   (({ path, blockHeight }) => <>{`${path}:${blockHeight}`}</>);

const { adapter, reference, metadata } = props;


const { get } = VM.require(adapter) || {
  get: (ref) => console.log("no adapter"),
};

if (get) {
  const content = get(reference);

  if (content === null) return <p>no content</p>;


  return (
    <>
      <textarea value={content} />
      <Widget
        src="every.near/widget/app"
        props={{
          page: "home",
          routes: content,
        }}
      />
    </>
  );
} else {
  return <p>Invalid adapter: {adapter}</p>;
}
