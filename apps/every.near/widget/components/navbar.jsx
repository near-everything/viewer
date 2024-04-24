const { Avatar, Button, Badge } = VM.require("every.near/widget/components") || {
  Avatar: () => <></>,
  Button: () => <></>,
  Badge: () => <></>,
};

const { MobileRight } = VM.require("every.near/widget/components.navbar.mobile-right") || {
  MobileRight: () => <></>,
};
const { MobileLeft } = VM.require("every.near/widget/components.navbar.mobile-left") || {
  MobileLeft: () => <></>,
};

const {
  Bell,
  Check,
  ChevronDown,
  ChevronUp,
  Code,
  Download,
  Everything,
  FileCode,
  GitFork,
  Grip,
  History,
  LayoutTemplate,
  LogOut,
  Menu,
  Moon,
  PaintRoller,
  PartyPopper,
  QRCode,
  ShoppingCart,
  Sun,
  UserCircle,
  Video,
} = VM.require("every.near/widget/icons") || {
  Bell: () => <></>,
  Check: () => <></>,
  ChevronDown: () => <></>,
  ChevronUp: () => <></>,
  Code: () => <></>,
  Download: () => <></>,
  Everything: () => <></>,
  FileCode: () => <></>,
  GitFork: () => <></>,
  Grip: () => <></>,
  History: () => <></>,
  LayoutTemplate: () => <></>,
  LogOut: () => <></>,
  Menu: () => <></>,
  Moon: () => <></>,
  PaintRoller: () => <></>,
  PartyPopper: () => <></>,
  QRCode: () => <></>,
  ShoppingCart: () => <></>,
  Sun: () => <></>,
  UserCircle: () => <></>,
  Video: () => <></>,
};

const [appMenuOpen, setAppMenuOpen] = useState(false);
const [codeMenuOpen, setCodeMenuOpen] = useState(false);
const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

const toggleAppMenu = useCallback(() => {
  setMenuDropdownOpen(false);
  setCodeMenuOpen(false);
  setAppMenuOpen((prev) => !prev);
}, []);

const toggleCodeMenu = useCallback(() => {
  setMenuDropdownOpen(false);
  setAppMenuOpen(false);
  setCodeMenuOpen((prev) => !prev);
}, []);

const toggleMenuDropdown = useCallback(() => {
  setCodeMenuOpen(false);
  setAppMenuOpen(false);
  setMenuDropdownOpen((prev) => !prev);
}, []);

// mobile
const [mobileRight, setMobileRight] = useState(false);
const [mobileLeft, setMobileLeft] = useState(false);

const toggleMobileRight = useCallback(() => {
  setMobileRight((prev) => !prev);
}, []);

const toggleMobileLeft = useCallback(() => {
  setMobileLeft((prev) => !prev);
}, []);

const StyledNavbar = styled.div`
  display: flex;
  padding: 12px 40px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 8px;
  }
`;

const LogoText = styled.div`
  span {
    color: #0d0d0d;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    text-transform: lowercase;
    margin-left: 12px;
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

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  min-width: 200px;
  margin-top: 4px;
  display: flex;
  padding: 8px 0;
  flex-direction: column;
  align-items: stretch;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);

  button {
    margin: 0 8px;
    justify-content: flex-start;
    color: #1c2024;
  }
`;

const BellCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20%, -20%);
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 100%;
  background: #dc3d43;
  color: var(--White, var(--White-100, #fff));
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.12px;
`;

const Seperator = styled.div`
  height: 1px;
  background: #e2e2e2;
  margin: 4px 0;
  width: 100%;
`;

const DropdownHeading = styled.div`
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
  border: 1px solid #e2e2e2;
  background: #fff;
  color: var(--Black-100, #000);

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
    background: #f8f8f8;

    svg {
      height: 20px;
      width: 20px;
    }
  }

  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    background: #f8f8f8;
  }
  &.disabled {
    cursor: not-allowed;
    background: #f8f8f8;
    color: #6f6f6f;
    svg,
    path {
      color: #c7c7c7;
      stroke: #c7c7c7;
    }
  }
`;

const getNotificationCount = () => {
  const notificationFeedSrc = "mob.near/widget/NotificationFeed";

  const lastBlockHeight = Storage.get("lastBlockHeight", notificationFeedSrc);
  if (lastBlockHeight === null) {
    return "";
  }

  const notifications = Social.index("notify", context.accountId, {
    order: "asc",
    from: (lastBlockHeight ?? 0) + 1,
    // subscribe: true,
  });

  return notifications.length;
};

const unreadNotifications = getNotificationCount();

const MemoizedUserDropdown = useMemo(
  () => (
    <Button variant="secondary" className="px-2" onClick={toggleMenuDropdown}>
      <Avatar accountId={context.accountId} size="24px" />
      {context.accountId} {menuDropdownOpen ? <ChevronUp /> : <ChevronDown />}
    </Button>
  ),
  [context.accountId, menuDropdownOpen]
);

return (
  <>
    <StyledNavbar className="container-xl">
      <div className="d-flex align-items-center gap-md-3 gap-2">
        <div className="position-relative">
          {/* Desktop */}
          <Button icon variant="tertiary" className="d-none d-md-block" onClick={toggleAppMenu}>
            <Grip />
          </Button>
          <Button icon variant="tertiary" className="d-md-none" onClick={toggleMobileLeft}>
            <Grip />
          </Button>
          {appMenuOpen && (
            <DropdownContent className="p-3" style={{ minWidth: 400 }}>
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
                    style={{ position: "absolute", top: 15, right: 15 }}
                  >
                    Coming Soon
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
            </DropdownContent>
          )}
        </div>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </div>
      <div className="align-items-center gap-2 d-none d-md-flex">
        {context.accountId ? (
          <>
            <div className="position-relative">
              <Button icon variant="secondary">
                <Bell />
              </Button>
              {unreadNotifications && <BellCounter />}
            </div>
            <div className="position-relative">
              {MemoizedUserDropdown}
              {menuDropdownOpen && (
                <DropdownContent>
                  <Button variant="tertiary" size="small">
                    <UserCircle /> My Profile
                  </Button>
                  <Button variant="tertiary" size="small">
                    <QRCode /> Mobile sign-in QR
                  </Button>
                  <Button variant="tertiary" size="small">
                    <Download /> Withdraw
                  </Button>
                  <Seperator />
                  <Button variant="tertiary" size="small" type="danger">
                    <LogOut />
                    Log Out
                  </Button>
                </DropdownContent>
              )}
            </div>
          </>
        ) : (
          <Button variant="primary">connect</Button>
        )}
        <div className="position-relative">
          <Button icon variant="secondary" onClick={toggleCodeMenu}>
            <Menu />
          </Button>
          {codeMenuOpen && (
            <DropdownContent style={{ right: "0" }}>
              <DropdownHeading>SOURCE CODE</DropdownHeading>
              <Button variant="tertiary" size="small">
                <GitFork />
                Fork Widget
              </Button>
              <Button variant="tertiary" size="small">
                <FileCode />
                View Source
              </Button>
              <Button variant="tertiary" size="small">
                <History />
                View History
              </Button>
              <Seperator />
              <DropdownHeading>APPEARANCE</DropdownHeading>
              <Button variant="tertiary" size="small">
                <Sun /> Light
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginLeft: "auto" }}
                >
                  <Check />
                </div>
              </Button>
              <Button variant="tertiary" size="small">
                <Moon /> Dark
              </Button>
            </DropdownContent>
          )}
        </div>
      </div>
      <div className="d-md-none d-flex align-items-center gap-2">
        <div className="position-relative">
          <Button icon variant="secondary">
            <Bell />
          </Button>
          {unreadNotifications && <BellCounter />}
        </div>
        <Button variant="secondary" className="px-2" onClick={toggleMobileRight}>
          <Avatar accountId={context.accountId} size="24px" /> <Menu />
        </Button>
      </div>
    </StyledNavbar>
    {mobileRight && <MobileRight toggle={toggleMobileRight} accountId={context.accountId} />}
    {mobileLeft && <MobileLeft toggle={toggleMobileLeft} />}
  </>
);
