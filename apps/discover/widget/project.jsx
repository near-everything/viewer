const { creatorId, projectId } = props;

const { Thing } = VM.require("every.near/widget/thing.sdk");
Thing = Thing || (() => <></>);

function Project({ creatorId, projectId }) {
  return <p>hello: {creatorId + " " + projectId}</p>;
}

return (
  <Thing
    type="project"
    View={() => <Project projectId={projectId} creatorId={creatorId} />}
  />
);
