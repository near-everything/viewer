const Avatar = (props) => {
  const accountId = props.accountId ?? context.accountId;

  const ImageWrapper = styled.div`
    img {
      width: ${(props) => props.size ?? "52px"} !important;
      height: ${(props) => props.size ?? "52px"} !important;
      flex-shrink: 0 !important;
      border-radius: 100px !important;
    }

    .profile-image {
      width: auto !important;
      height: auto !important;
    }

    @media screen and (max-width: 768px) {
      ${(props) =>
        `
      img {
        width: ${props.size ?? "40px"} !important;
        height: ${props.size ?? "40px"} !important;
      }
    `}
    }
  `;

  return (
    <ImageWrapper size={props.size}>
      <Widget
        src="mob.near/widget/ProfileImage"
        props={{ accountId }}
        loading={<div style={{ width: props.size, height: props.size }}></div>}
      />
    </ImageWrapper>
  );
};

return { Avatar };
