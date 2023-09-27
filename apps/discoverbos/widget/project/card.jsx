const { creatorId, projectId } = props;
const data = Social.get(`${creatorId}/thing/${projectId}/**`, "final");

if (!data) {
  return <div>Project not found</div>;
}

return (
  <div>
    <h1>Card</h1>
    <p>{JSON.stringify(data)}</p>
  </div>
);
