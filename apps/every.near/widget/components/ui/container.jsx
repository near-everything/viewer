const Container = styled.div`
  padding: 32px 40px;
  background: var(--bg, #fff);
  color: var(--color, #0d0d0d);
  height: 100%;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

return { Container };
