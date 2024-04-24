const { Badge } = VM.require("every.near/widget/components") || {
  Badge: () => <></>,
};

return (
  <div>
    <Badge variant="solid" color="blue">
      11+
    </Badge>
  </div>
);
