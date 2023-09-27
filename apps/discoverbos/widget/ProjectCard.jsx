const { creatorId, projectId } = props;
const data = Social.get(`${creatorId}/thing/${projectId}/**`, "final");

if (data === null) {
  return <div>Loading...</div>;
}

if (!data) {
  return <div>Project not found</div>;
}

const {
  name: projectName,
  image,
  backgroundImage,
  type,
  description,
  tags,
  linktree,
} = data.metadata;

let tagKeys = [];
if (tags) {
  tagKeys = Object.keys(tags);
}

console.log(projectName, linktree);

return (
  <div
    className="border shadow-sm rounded-2 d-flex flex-column p-2 gap-2"
    style={{ width: "20rem", minHeight: "22rem" }}
  >
    <div className="d-flex align-items-center gap-2">
      <div>
        <Widget
          src="mob.near/widget/Image"
          props={{
            image: image,
            alt: `${projectName}-image`,
            className: "rounded-circle",
            style: {
              width: 32,
              height: 32,
              objectFit: "cover",
            },
            fallbackUrl:
              "https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png",
          }}
        />
      </div>
      <div style={{ fontWeight: "bold" }}>{projectName}</div>
    </div>
    <div>
      <Widget
        src="mob.near/widget/Image"
        props={{
          image: backgroundImage,
          alt: `${projectName}-background`,
          style: {
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            borderRadius: "0.5rem",
          },
          fallbackUrl:
            "https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png",
        }}
      />
    </div>
    {description && <div>{description}</div>}
    {linktree && (
      <div className="d-flex">
        {linktree.twitter && (
          <a
            href={`https://twitter.com/${linktree.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="me-2"
          >
            <i className="bi bi-twitter"></i>
          </a>
        )}

        {linktree.telegram && (
          <a
            href={`https://t.me/${linktree.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="me-2"
          >
            <i className="bi bi-telegram"></i>
          </a>
        )}

        {linktree.website && (
          <a
            href={`https://${linktree.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        )}
      </div>
    )}

    {tagKeys && (
      <div className="d-flex gap-1 align-items-center">
        {tagKeys.map((tag) => (
          <small>#{tag}</small>
        ))}
      </div>
    )}
  </div>
);
