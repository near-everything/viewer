const path = props.path || "every.near/thing/core";

State.init({
  path,
  thingSrc: path,
});

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;  
//   border: 2px solid orange;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid green;
  padding: 20px;

  @media (max-width: 767px) {
    border-top: none;
    padding: 10px;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  

  svg {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 767px) {
    margin-top: 0;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button = styled.button`
  text-transform: lowercase !important;
`;

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const SubjectField = styled.input`
  font-size: 2em;
//   line-height: 1.25;
//   font-weight: 400;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   background: none;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 1.5em;
  }
`;

function Thing() {
  if (state.thingSrc) {
    return (
      <>
        <Widget
          src={"efiz.near/widget/Every.Thing.View"}
          props={{ path: state.thingSrc }}
        />
      </>
    );
  }
}

// how can we have this be custom?
// settings/every/subject

function handleInputChange(e) {
  State.update({
    path: e.target.value,
  });
}

return (
  <>
    <Row>
      <Column>
        <IconBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="24px"
            height="24px"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>
        </IconBox>
        <SubjectField
          type="text"
          placeholder={data.name}
          onChange={(e) => {
            State.update({ path: e.target.value });
          }}
          value={state.path}
        />
        <ActionButton onClick={() => State.update({ thingSrc: state.path })}>
          <span>&#10140;</span>
        </ActionButton>
      </Column>
    </Row>
    <>
      <Thing />
    </>
  </>
);
