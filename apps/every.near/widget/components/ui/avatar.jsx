const { User } = VM.require("every.near/widget/icons") || {
  User: () => <></>,
};

const Avatar = ({ accountId, size, large, form, imageStyle, key }) => {
  const imageForm = form ?? "circle";
  const profile = Social.getr(`${accountId}/profile`);
  if (!profile.image) {
    return (
      <div
        key={key}
        style={{
          width: size ?? "48px",
          height: size ?? "48px",
          background: "var(--seperator-color, #e2e2e2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "500",
          textAlign: "center",
          borderRadius: imageForm === "rectangle" ? "8px" : "100%",
          textTransform: "capitalize",
          color: "var(--btn-secondary-color, #171717)",
          ...imageStyle,
        }}
      >
        {profile.name ? (
          profile.name[0]
        ) : (
          <User
            width={size ? "14px" : "18px"}
            height={size ? "14px" : "18px"}
            color={"var(--btn-secondary-color, #171717)"}
          />
        )}
      </div>
    );
  }

  return (
    <Widget
      src="mob.near/widget/ProfileImage"
      key={key}
      props={{
        accountId,
        className: "",
        fast: true,
        style: {},
        thumbnail: large ? "large" : "thumbnail",
        imageClassName: "",
        imageStyle: {
          width: size ?? "48px",
          height: size ?? "48px",
          borderRadius: imageForm === "rectangle" ? "8px" : "100%",
          objectFit: "cover",
          ...imageStyle,
        },
      }}
    />
  );
};

return { Avatar };
