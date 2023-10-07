const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const Left = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Right = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

return (
  <Container>
    <Left>
      <Widget src="every.near/widget/view.editor" />
    </Left>
    <Right />
  </Container>
);
