const accountId = props.accountId ?? context.accountId;

const src = Social.get(`${accountId}/settings/dev/src`);

if (src === null) {
  return "Loading...";
}

const defaultSource = props.src ?? "mob.near/widget/Hashtag.Feed";

State.init({
  src: src ?? defaultSource,
  prop: state.prop,
  value: state.value,
  isTemplate: false,
});

const handleSave = () =>
  Social.set({
    settings: {
      dev: {
        src: state.src,
      },
    },
  });

const handleCreate = () =>
  Social.set({
    widget: {
      [`${state.value}.${widgetName}`]: {
        "": `const ${state.prop} = props.${state.prop} ?? "${state.value}"; return (<Widget src="${state.src}" props={{${state.prop}: ${state.prop}}} />);`,
        metadata: {
          tags: {
            build: "",
          },
        },
      },
    },
  });

const addWidget = ({ widgetPath: src, onHide }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        State.update({
          src,
        });
        onHide();
      }}
    >
      <i className="bi bi-plus-lg" /> Add
    </button>
  );
};

const current_src = state.src;
const current_prop = state.prop;
const current_value = state.value;

let string = ".near/widget/";

const checkSource = (src) => {
  if (src.indexOf(string) !== -1) {
    return State.update({ isTemplate: true });
  }
};

const validTemplate = checkSource(state.src);

const [ownerId, widget, widgetName] = current_src.split("/");

const metadata = Social.get(
  `${ownerId}/widget/${widgetName}/metadata/**`,
  "final"
);

return (
  <>
    <h3>Create Anything</h3>
    <div className="mb-2 mt-3">
      <h4>Explore Templates</h4>
      <Widget
        src="hack.near/widget/dev.Widget.Search"
        props={{ extraButtons: addWidget }}
      />
    </div>
    <hr />
    <div className="mt-3">
      <h5>
        <b>Template Source</b>
      </h5>
      {!validTemplate ? (
        <p>
          <i>not a valid component</i>
        </p>
      ) : (
        <p>
          <i>↳ make something based on this component:</i>
        </p>
      )}
      <input
        type="text"
        value={state.src}
        placeholder="efiz.near/widget/Community.Posts"
      />
    </div>
    {validTemplate && (
      <div className="mt-3">
        <h5>Main Prop 🎭</h5>
        <p>
          <i>
            ↳ read the documentation about{" "}
            <a href="https://docs.near.org/bos/home#props-receiving-input">
              props
            </a>
          </i>
        </p>
        <input type="text" placeholder="hashtag" value={state.prop} />
      </div>
    )}
    {validTemplate && (
      <div className="mt-3">
        <h5>Default Value</h5>
        <p>
          <i>↳ passed into template via props.{state.prop ?? "id"}</i>
        </p>
        <input type="text" placeholder="near" value={state.value} />
      </div>
    )}

    <div className="mt-3">
      <button
        className="btn btn-primary mx-1"
        disabled={!validTemplate}
        onClick={handleSave}
      >
        Save Template
      </button>
      {state.src && (
        <button
          disabled={!state.prop || !state.value}
          className="btn btn-outline-success mx-1"
          onClick={handleCreate}
        >
          Create
        </button>
      )}
    </div>
    <hr />
    <h3>Preview</h3>
    <div className="mb-2">
      <Widget src={state.src} props={{ [state.prop]: state.value }} />
    </div>
  </>
);
