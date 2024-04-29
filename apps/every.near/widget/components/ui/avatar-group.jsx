const { Avatar } = VM.require("every.near/widget/components.ui.avatar") || {
  Avatar: () => <></>,
};

const AvatarGroup = ({ accountIds, large, size, maxCount }) => {
  const amount = accountIds.length;
  const remaining = amount - maxCount;

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      {accountIds.splice(0, maxCount ?? amount).map((accountId) => (
        <Avatar
          accountId={accountId}
          key={accountId}
          large={large}
          imageStyle={{ marginLeft: "-6px", border: "3px solid var(--bg, #fff)" }}
          size={size}
        />
      ))}
      {remaining > 0 && (
        <div
          style={{
            width: size ?? "48px",
            height: size ?? "48px",
            background: "var(--separator-color, #e2e2e2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size ? "14px" : "18px",
            fontWeight: "500",
            textAlign: "center",
            borderRadius: "100%",
            textTransform: "capitalize",
            marginLeft: "-6px",
            border: "3px solid var(--bg, white)",
            color: "var(--btn-secondary-color, #171717)",
          }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

return { AvatarGroup };
