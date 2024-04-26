const { Avatar, Button, Badge, Logo } = VM.require("every.near/widget/components") || {
  Avatar: () => <></>,
  Button: () => <></>,
  Badge: () => <></>,
  Logo: () => <></>,
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
  background: var(--bg, #fff);
  border-bottom: 1px solid var(--stroke, #e2e2e2);

  @media (max-width: 768px) {
    padding: 16px;
    gap: 8px;
  }
`;

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
  background: var(--bg, #fff);
  border-radius: 12px;
  border: 1px solid var(--stroke, #e2e2e2);
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);

  button {
    margin: 0 8px;
    justify-content: flex-start;
    color: var(--dropdown-button-color, #1c2024);
  }
`;

const BellCounter = styled.div`
  position: absolute;
  top: 35%;
  right: 35%;
  transform: translate(50%, -50%);
  display: flex;
  width: 10px;
  height: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 100%;
  background: var(--btn-primary-danger-bg, #dc3d43);
  border: 1.5px solid var(--btn-secondary-bg, #fff);
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.12px;
`;

const Seperator = styled.div`
  height: 1px;
  background: var(--seperator-color, #e2e2e2);
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
    background: var(--btn-secondary-hover-bg, #c7c7c7);
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

const profile = Social.getr(`${context.accountId}/profile`);
const theme = profile.every.theme ?? "light";

return (
  <>
    <StyledNavbar className="container-xl">
      <div className="d-flex align-items-center gap-md-3 gap-2">
        <div className="position-relative">
          {/* Desktop */}
          <Button icon variant="tertiary" className="d-none d-md-flex" onClick={toggleAppMenu}>
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
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      // color: "var(--btn-secondary-color, #EDEDED)",
                      // background: "var(--btn-secondary-bg, #C7C7C7)",
                    }}
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
              <Button
                variant="tertiary"
                size="small"
                onClick={() =>
                  Social.set({
                    profile: {
                      every: {
                        theme: "light",
                      },
                    },
                  })
                }
              >
                <Sun /> Light
                {theme === "light" && (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ marginLeft: "auto" }}
                  >
                    <Check />
                  </div>
                )}
              </Button>
              <Button
                variant="tertiary"
                size="small"
                onClick={() =>
                  Social.set({
                    profile: {
                      every: {
                        theme: "dark",
                      },
                    },
                  })
                }
              >
                <Moon /> Dark
                {theme === "dark" && (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ marginLeft: "auto" }}
                  >
                    <Check />
                  </div>
                )}
              </Button>
              {!context.accountId && (
                <span
                  className="px-3"
                  style={{ fontSize: "12px", color: "var(--btn-secondary-danger-color, #CD2B31)" }}
                >
                  <small>Please login to change theme</small>
                </span>
              )}
            </DropdownContent>
          )}
        </div>
      </div>
      <div className="d-md-none d-flex align-items-center gap-2">
        {context.accountId && (
          <div className="position-relative">
            <Button icon variant="secondary">
              <Bell />
            </Button>
            {unreadNotifications && <BellCounter />}
          </div>
        )}
        <Button
          variant="secondary"
          icon={!context.accountId}
          className="px-2"
          onClick={toggleMobileRight}
        >
          {context.accountId && <Avatar accountId={context.accountId} size="24px" />} <Menu />
        </Button>
      </div>
    </StyledNavbar>
    {mobileRight && <MobileRight toggle={toggleMobileRight} accountId={context.accountId} />}
    {mobileLeft && <MobileLeft toggle={toggleMobileLeft} />}
  </>
);
