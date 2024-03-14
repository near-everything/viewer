const accountId = props.accountId ?? context.accountId;
const daoId = props.daoId ?? "build.sputnik-dao.near";

const policy = Near.view(daoId, "get_policy");

const deposit = policy.proposal_bond;

let string = "sputnik-dao.near";
let domain = ".near";

State.init({
  accountId: accountId ?? "",
  daoId: daoId ?? "",
  isDao: false,
  isAccount: false,
  isAddress: false,
});

const checkDao = (daoId) => {
  if (daoId.indexOf(string) !== -1) {
    return State.update({ isDao: true });
  }
};

const checkOrgAccount = (daoId) => {
  if (daoId.indexOf(domain) !== -1) {
    return State.update({ isAddress: true });
  }
};

const checkAccount = (accountId) => {
  if (accountId.indexOf(domain) !== -1) {
    return State.update({ isAccount: true });
  }
};

const validDao = checkDao(state.daoId);
const validAccount = checkAccount(state.accountId);
const validOrgAccount = checkOrgAccount(state.daoId);

const permission_args = JSON.stringify({
  predecessor_id: `${state.accountId}`,
  keys: [`${state.daoId}`],
});

const proposal_args = Buffer.from(permission_args, "utf-8").toString("base64");

const handleProposal = () => {
  Near.call([
    {
      contractName: state.daoId,
      methodName: "add_proposal",
      args: {
        proposal: {
          description: "grant permission to edit DAO profile on NEAR Social",
          kind: {
            FunctionCall: {
              receiver_id: "social.near",
              actions: [
                {
                  method_name: "grant_write_permission",
                  args: proposal_args,
                  deposit: "50000000000000000000000",
                  gas: "30000000000000",
                },
              ],
            },
          },
        },
      },
      deposit: deposit,
      gas: "300000000000000",
    },
  ]);
};

const handleGrant = () => {
  Near.call([
    {
      contractName: "social.near",
      methodName: "grant_write_permission",
      args: {
        predecessor_id: state.accountId,
        keys: [state.daoId],
      },
      deposit: "1",
    },
  ]);
};

const onChangeDao = (daoId) => {
  State.update({
    daoId,
  });
};

const onChangeAccount = (accountId) => {
  State.update({
    accountId,
  });
};

return (
  <div className="d-flex flex-column">
    <div className="d-flex p-1 m-1 flex-row">
      <Widget
        src="mob.near/widget/ProfileImage"
        props={{ accountId: state.daoId }}
      />
      <h1 className="px-2">Settings</h1>
    </div>
    <div className="p-1 m-1">
      <div>
        <h2>
          <b>Organization Account:</b>
        </h2>
        {!validOrgAccount ? (
          <p>
            ↳ must be a valid NEAR account ~ <i>example.near</i>
          </p>
        ) : (
          <div>
            <p>↳ must have permission to control this account</p>
            <p>
              -- consider using a{" "}
              <a href="/#/hack.near/widget/DAO.Profile">DAO account</a> ~{" "}
              <i>
                example.<b>sputnik-dao.near</b>
              </i>
            </p>
          </div>
        )}
        <input
          placeholder="<example>.sputnik-dao.near"
          type="text"
          value={state.daoId}
          onChange={(e) => onChangeDao(e.target.value)}
        ></input>
      </div>
    </div>
    {validOrgAccount && (
      <div className="p-1 m-1">
        {validDao ? <h3>Request Permissions:</h3> : <h3>Grant Permissions:</h3>}

        <div className="w-100 d-flex gap-2">
          <div>
            {validDao ? (
              <div>
                <p>
                  ↳ propose allowing <b>{state.accountId}</b> to edit profile of{" "}
                  <b>{state.daoId}</b>
                </p>
              </div>
            ) : (
              <div>
                <p>
                  ↳ give <b>{state.accountId}</b> ability to edit profile of{" "}
                  <b>{state.daoId}</b>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-100 d-flex gap-2">
          <input
            disabled={!validAccount}
            placeholder={context.accountId}
            type="text"
            value={state.accountId}
            onChange={(e) => onChangeAccount(e.target.value)}
          ></input>
          {validDao ? (
            <div>
              <button disabled={!validAccount} onClick={handleProposal}>
                Submit
              </button>
            </div>
          ) : (
            <button disabled={!validAccount} onClick={handleGrant}>
              Grant
            </button>
          )}
        </div>
      </div>
    )}
  </div>
);
