const buttonText = props.buttonText || "Upload an image";
const onChange = props.onChange;
const cid = props.cid ?? null;

initState({
  file: { cid },
});

const ipfsUrl = (cid) => `https://ipfs.near.social/ipfs/${cid}`;

const filesOnChange = (file) => {
  if (file?.length > 0) {
    State.update({
      file: {
        uploading: true,
        cid: null,
      },
    });
    const body = file[0];
    asyncFetch("https://ipfs.near.social/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body,
    }).then((res) => {
      const cid = res.body.cid;
      State.update({
        file: {
          cid,
        },
      });
      console.log(res);
      if (onChange) {
        onChange({ ipfs_cid: cid });
      }
    });
  } else {
    State.update({
      file: null,
    });
  }
};

return (
  <div className="d-inline-block">
    {state.file.cid ? <img src={ipfsUrl(state.file.cid)} width={100} /> : <></>}

    <Files
      multiple={false}
      accepts={["image/*"]}
      minFileSize={1}
      clickable
      className="btn btn-outline-primary"
      onChange={filesOnChange}
    >
      {state.file?.uploading
        ? "Uploading"
        : state.file && state.file.cid
        ? "Replace"
        : buttonText}
    </Files>
  </div>
);
