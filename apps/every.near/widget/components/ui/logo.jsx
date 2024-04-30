const { Everything } = VM.require("${config_account}/widget/icons") || {
  Everything: () => <></>,
};

const LogoText = styled.div`
  span {
    color: var(--color, #0d0d0d);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    text-transform: lowercase;
    margin-left: 12px;
  }

  circle {
    fill: var(--color, #0d0d0d);
  }
  @media (max-width: 768px) {
    span {
      font-size: 15px;
      margin-left: 10px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Logo = () => {
  return (
    <LogoText className="d-flex align-items-center">
      <Everything />
      <span>everything</span>
    </LogoText>
  );
};

return { Logo };
