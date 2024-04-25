const { Badge, Button, Logo } = VM.require("every.near/widget/components") || {
  Badge: () => <></>,
  Button: () => <></>,
  Logo: () => <></>,
};

const { Code, Everything, LayoutTemplate, PaintRoller, PartyPopper, ShoppingCart, X, Video } =
  VM.require("every.near/widget/icons") || {
    Code: () => <></>,
    Everything: () => <></>,
    LayoutTemplate: () => <></>,
    PaintRoller: () => <></>,
    PartyPopper: () => <></>,
    ShoppingCart: () => <></>,
    X: () => <></>,
    Video: () => <></>,
  };

const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg, #fff);
    z-index: 1049;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .close-button {
      svg {
        width: 28px;
        height: 28px;
        stroke-width: 0;
      }
    }
  }
`;

const Heading = styled.div`
  display: flex;
  padding: 16px 16px 8px 16px;
  margin: 0 8px;
  align-items: center;
  align-self: stretch;
  color: #8f8f8f;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const AppCard = styled.div`
  position: relative;
  display: flex;
  min-width: 160px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 20px;
  border: 1px solid var(--stroke, #e2e2e2);
  background: var(--btn-secondary-bg, #fff);
  color: var(--btn-secondary-color, #000);

  /* Poppins/Text/M - 16px/Medium */
  font-family: Poppins, sans-serif;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.16px;

  .icon {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--btn-secondary-hover-bg, #c7c7c7);

    svg {
      height: 20px;
      width: 20px;
    }

    svg,
    path {
      color: var(--btn-secondary-color, #000);
      stroke: var(--btn-secondary-color, #000);
    }
  }

  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    background: var(--btn-secondary-hover-bg, #c7c7c7);
  }
  &.disabled {
    cursor: not-allowed;
    background: var(--app-card-disabled-bg, #c7c7c7);
    color: #6f6f6f;
    svg,
    path {
      color: #c7c7c7;
      stroke: #c7c7c7;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;
  flex-grow: 1;

  button {
    justify-content: flex-start;
    padding: 8px;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.14px;
  }

  .active {
    color: var(--color);
    font-weight: 500;
  }
`;

const MobileLeft = ({ toggle }) => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between p-3">
        <Logo />
        <Button icon variant="tertiary" className="close-button" onClick={toggle}>
          <X />
        </Button>
      </div>
      <Links>
        <Button variant="tertiary" className="active">
          home
        </Button>
      </Links>
      <div>
        <Heading>ALL APPS</Heading>
        <AppGrid>
          <AppCard>
            <div className="icon">
              <Video />
            </div>
            Video
          </AppCard>
          <AppCard>
            <div className="icon">
              <PaintRoller />
            </div>
            Canvas
          </AppCard>
          <AppCard>
            <div className="icon">
              <PartyPopper />
            </div>
            Event
          </AppCard>
          <AppCard>
            <div className="icon">
              <LayoutTemplate />
            </div>
            Profile
          </AppCard>
          <AppCard className="disabled">
            <Badge
              variant="alpha"
              size="x-small"
              style={{
                position: "absolute",
                top: 15,
                right: 15,
                color: "#C7C7C7)",
                background: "var(--btn-primary-disabled-bg, #C7C7C7)",
              }}
            >
              Soon
            </Badge>
            <div className="icon">
              <ShoppingCart />
            </div>
            Marketplace
          </AppCard>
          <AppCard>
            <div className="icon">
              <Code />
            </div>
            App
          </AppCard>
          <AppCard>
            <div className="icon">
              <Code />
            </div>
            App
          </AppCard>
          <AppCard>
            <div className="icon">
              <Code />
            </div>
            App
          </AppCard>
        </AppGrid>
      </div>
    </Container>
  );
};
return { MobileLeft };
