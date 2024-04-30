const { X } = VM.require("${config_account}/widget/icons") || {
  X: () => <></>,
};

const { Badge } = VM.require("${config_account}/widget/components") || {
  Badge: () => <></>,
};

const Tag = ({ children, size, variant, color, ...restProps }) => {
  return (
    <Badge
      size={size}
      variant={variant === "soft" ? "alpha" : variant}
      color={color ?? "gray"}
      {...restProps}
      style={{ cursor: "pointer" }}
    >
      {children}
      <X />
    </Badge>
  );
};

return { Tag };
