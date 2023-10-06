const { accountId } = props;
const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const SmallContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

return (
  <FullScreenContainer>
    <Widget src="every.near/widget/profile.index" props={{ accountId }} />
    <SmallContainer><Widget src="every.near/widget/graph.index" /></SmallContainer>
  </FullScreenContainer>
);
