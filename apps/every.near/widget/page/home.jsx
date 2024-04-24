const { Badge, Container } = VM.require("every.near/widget/components") || {
  Badge: () => <></>,
  Container: () => <></>,
};

return (
  <Container>
    <Badge variant="solid" color="blue">
      11+
    </Badge>
  </Container>
);
