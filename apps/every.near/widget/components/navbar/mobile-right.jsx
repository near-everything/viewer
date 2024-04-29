const { Avatar, Button, Logo } = VM.require("every.near/widget/components") || {
  Avatar: () => <></>,
  Button: () => <></>,
  Logo: () => <></>,
};

const {
  Everything,
  X,
  GitFork,
  Sun,
  Moon,
  Check,
  FileCode,
  History,
  UserCircle,
  QRCode,
  Download,
  LogOut,
} = VM.require("every.near/widget/icons") || {
  Everything: () => <></>,
  X: () => <></>,
  GitFork: () => <></>,
  Sun: () => <></>,
  Moon: () => <></>,
  Check: () => <></>,
  FileCode: () => <></>,
  History: () => <></>,
  UserCircle: () => <></>,
  QRCode: () => <></>,
  Download: () => <></>,
  LogOut: () => <></>,
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

const ProfileSection = styled.div`
  display: flex;
  padding: 24px 8px;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    justify-content: flex-start;
    color: var(--dropdown-button-color, #1c2024);
    padding: 8px 12px 8px 8px;
  }
`;

const OptionSection = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
  button {
    justify-content: flex-start;
    color: var(--dropdown-button-color, #1c2024);
    padding: 8px 12px 8px 8px;
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

const Separator = styled.div`
  height: 1px;
  background: var(--separator-color, #e2e2e2);
  margin: 4px 0;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  h6 {
    color: var(--color, #0d0d0d);
    font-family: Poppins, sans-serif;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
    margin: 0;
  }

  p {
    color: var(--color, #0d0d0d);
    font-family: Poppins, sans-serif;
    font-size: 14px;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.14px;
    margin: 0;
  }
`;

const MobileRight = ({ toggle, accountId }) => {
  const profile = Social.getr(`${accountId}/profile`);
  const theme = profile.every.theme ?? "light";

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between p-3">
        {accountId ? <Avatar size="48px" accountId={accountId} /> : <Logo />}
        <Button icon variant="tertiary" className="close-button" onClick={toggle}>
          <X />
        </Button>
      </div>
      {accountId && (
        <UserInfo>
          <h6 className="text-truncate">{profile.name}</h6>
          <p className="text-truncate">{accountId}</p>
        </UserInfo>
      )}
      <ProfileSection>
        {accountId ? (
          <></>
        ) : (
          <>
            <Button className="mx-2">Connect</Button>
          </>
        )}
        <ProfileButtons>
          <Button variant="tertiary" size="small">
            <UserCircle /> My Profile
          </Button>
          <Button variant="tertiary" size="small">
            <QRCode /> Mobile sign-in QR
          </Button>
          <Button variant="tertiary" size="small">
            <Download /> Withdraw
          </Button>
        </ProfileButtons>
      </ProfileSection>
      <OptionSection>
        <Heading>SOURCE CODE</Heading>
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
        <Separator />
        <Heading>APPEARANCE</Heading>
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
        {!accountId && (
          <span
            className="px-3"
            style={{ fontSize: "12px", color: "var(--btn-secondary-danger-color, #CD2B31)" }}
          >
            <small>Please login to change theme</small>
          </span>
        )}
        <Separator />
        <Button variant="tertiary" size="small" type="danger">
          <LogOut />
          Log Out
        </Button>
      </OptionSection>
    </Container>
  );
};

return { MobileRight };
