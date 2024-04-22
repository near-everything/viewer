const { Button } = VM.require("every.near/widget/components") || {
  Button: () => <></>,
};

const PoppinsCSS = fetch(
  `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet`
).body;

const Root = styled.div`
  // you can override classnames here
  ${PoppinsCSS}

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

return (
  <Root>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button size={"medium"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button size={"small"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button size={"large"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button size={"medium"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button size={"small"} icon>
          <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button variant="secondary" size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button variant="secondary" size={"medium"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button variant="secondary" size={"small"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button variant="secondary" size={"large"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button variant="secondary" size={"medium"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button variant="secondary" size={"small"} icon>
          <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button variant="tetriary" size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button variant="tetriary" size={"medium"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button variant="tetriary" size={"small"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button variant="tetriary" size={"large"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button variant="tetriary" size={"medium"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button variant="tetriary" size={"small"} icon>
          <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button href="https://google.com" size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button href="https://google.com">
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button type="danger" size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" size={"medium"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" size={"small"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button type="danger" size={"large"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" size={"medium"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" size={"small"} icon>
          <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button type="danger" variant="secondary" size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="secondary" size={"medium"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="secondary" size={"small"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button type="danger" variant="secondary" size={"large"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="secondary" size={"medium"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="secondary" size={"small"} icon>
          <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex align-items-center gap-3">
        <Button type="danger" variant="tetriary" size={"large"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="tetriary" size={"medium"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="tetriary" size={"small"}>
          <i className="bi bi-box"></i> button <i className="bi bi-box"></i>
        </Button>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button type="danger" variant="tetriary" size={"large"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="tetriary" size={"medium"} icon>
          <i className="bi bi-box"></i>
        </Button>
        <Button type="danger" variant="tetriary" size={"small"} icon>
          <i className="bi bi-box"></i>
        </Button>
      </div>
    </div>
  </Root>
);
