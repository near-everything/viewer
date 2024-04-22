const fadeIn = styled.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 3rem;
    text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px, rgba(0, 0, 0, 0.1) 3px 3px 3px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

return (
  <CSS>
    <h1>everything.dev</h1>
    <img
      src="https://ipfs.near.social/ipfs/bafkreidhy7zo33wqjxhqsv2dd6dp2wzloitaa4lmj3rzq5zvcdtp2smeaa"
      alt="under construction"
    />
  </CSS>
);
