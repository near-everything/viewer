const connected_account = context.accountId;

const social_contract_id = "social.near";

State.init({
  account: "",
});

let data = {
  accountId: state.account,
};

const handleGrantAccount = () => {
  const account = data.accountId;

  Near.call([
    {
      contractName: social_contract_id,
      methodName: "grant_write_permission",
      args: { predecessor_id: data.accountId, keys: [connected_account] },
      deposit: "1",
    },
  ]);
};

return (
  <div class="d-flex flex-column gap-2">
    <div>
      <h4>Grant Permissions</h4>
      {!!data.accountId && (
        <p>
          You are granting write permissions to{" "}
          <span class="fw-bold">{data.accountId}</span>
        </p>
      )}
    </div>
    <div class="w-100 d-flex gap-4">
      <input id="accountid" type="text" value={state.account}></input>
      <button
        onClick={() => {
          handleGrantAccount();
        }}
      >
        Grant
      </button>
    </div>
  </div>
);
