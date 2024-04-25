const { Container } = VM.require("every.near/widget/components") || {
  Container: () => <></>,
};

return (
  <Container>
    <Widget src="every.near/widget/components.ui.library" loading="" />
  </Container>
);
