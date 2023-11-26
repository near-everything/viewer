const accountId = context.accountId || "root.near";
const authorId = "mob.near";

const { title, description, components } = VM.require("/*__@appAccount__*//widget/library.components");

const renderProps = (props, optional) => {
  return Object.entries(props || {}).map(([key, desc]) => {
    return (
      <tr key={key}>
        <td>
          <span className={`code prop-key${optional ? " optional" : ""}`}>
            {key}
          </span>
        </td>
        <td className="prop-desc">
          <Markdown text={desc} />
        </td>
      </tr>
    );
  });
};

const renderComponent = (c, i) => {
  const widgetSrc = `${c.authorId}/${c.type}/${c.name}`;
  const embedCode = `<Widget\n  src="${widgetSrc}"\n  props={{${JSON.stringify(
    c.demoProps,
    undefined,
    2
  )
    .slice(1, -1)
    .split("\n")
    .map((s) => `  ${s}`)
    .join("\n")}}}\n/>\n`;
  const id = c.title.toLowerCase().replaceAll(" ", "-");
  return (
    <div className="component" key={i}>
      <div className="anchor" id={id} />
      <a href={`#${id}`}>
        <h3>{c.title}</h3>
      </a>
      <p>{c.description}</p>
      <label>Preview</label>
      <div className="preview mb-3" style={c.previewStyle}>
        <Widget src={widgetSrc} props={c.demoProps} />
      </div>
      <label>Component</label>
      <div className="d-flex flex-row flex-wrap justify-content-between mb-3">
        <div className="path font-monospace">
          <Widget
            src="mob.near/widget/CopyButton"
            props={{
              text: widgetSrc,
              label: widgetSrc,
            }}
          />
        </div>
        <div className="source">
          <a
            href={`/mob.near/widget/WidgetSource?src=${widgetSrc}`}
            target="_blank"
            className="btn btn-outline-primary border-0"
          >
            Source
          </a>
        </div>
      </div>
      <label>Props</label>
      <table className="props table table-bordered mb-3">
        <thead>
          <tr>
            <th>Key</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {renderProps(c.requiredProps)}
          {renderProps(c.optionalProps, true)}
        </tbody>
      </table>
      <label>Example</label>
      <div className="embed-code">
        <Markdown text={`\`\`\`jsx\n${embedCode}\n\`\`\``} />
        <div className="embed-copy">
          <Widget
            src="mob.near/widget/CopyButton"
            props={{ text: embedCode, className: "btn btn-outline-light" }}
          />
        </div>
      </div>
    </div>
  );
};

const renderMenuItem = (c, i) => {
  const prev = i ? components[i - 1] : null;
  const res = [];
  if (!prev || prev.category !== c.category) {
    res.push(
      <h5 className="category" key={c.category}>
        {c.category}
      </h5>
    );
  }
  const id = c.title.toLowerCase().replaceAll(" ", "-");
  res.push(
    <div className="menu-item" key={i}>
      <a href={`#${id}`}>{c.title}</a>
    </div>
  );
  return res;
};

const Wrapper = styled.div`
@media(min-width: 992px) {
  .b-s {
    border-left: 1px solid #eee;
  }
  .b-e {
    border-right: 1px solid #eee;
  }
}
.category:not(:first-child) {
  margin-top: 1em;
}
.component {
  padding: 0.5em 12px;
  padding-bottom: 0;
  margin-bottom: 3em;
  margin: 0 -12px 3em;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .anchor {
    position: absolute;
    top: -70px;
  }

  table {
    background: white;
  }

  label {
    font-size: 20px;
  }

  .code {
    display: inline-flex;
    line-height: normal;
    border-radius: 0.3em;
    padding: 0 4px;
    border: 1px solid #ddd;
    background: rgba(0, 0, 0, 0.03);
    font-family: var(--bs-font-monospace);
  }
  .path {

  }
  .preview {
    background-color: white;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 12px;
    pre {
      margin-bottom: 0;
    }
  }
  .props {
    .prop-key {
      font-weight: 600;
      &.optional {
        font-weight: normal;
      }
    }
    .prop-desc {
      p {
        margin-bottom: 0;
      }
    }
  }
  .embed-code {
    position: relative;

    .embed-copy {
      position: absolute;
      top: 18px;
      right: 10px;
    }
  }
}
`;

return (
  <Wrapper>
    <h3>{title}</h3>
    <div className="mb-3">
     {description}
    </div>
    <div className="row">
      <div className="col-lg-3 b-e b-s">{components.map(renderMenuItem)}</div>
      <div className="col-lg-9 b-e overflow-scroll">{components.map(renderComponent)}</div>
    </div>
  </Wrapper>
);