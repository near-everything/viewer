const { Container } = VM.require("${config_account}/widget/components") || {
  Container: () => <></>,
};

return (
  <Container>
    <Widget src="${config_account}/widget/components.ui.library" loading="" />
  </Container>
);
