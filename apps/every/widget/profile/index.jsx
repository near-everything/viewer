// show from settings or show default
// (this should be a module)

// I don't like image and backgroundImage, I just want it to be colors

// NFT metadata might differ per use case. And in these cases, we want to define a standard on chain so it
// can be used in the components that will display this data.

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CenteredImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const NameText = styled.h1`
  font-size: 2em;
  margin-top: 20px;
`;

const DescriptionText = styled.p`
  font-size: 1em;
  margin-top: 10px;
`;
const accountId = props.accountId || context.accountId;
const data = Social.getr(`${accountId}/profile`, "final");
if (!data) {
  return <p>Loading...</p>;
}
// return <p>{JSON.stringify(data)}</p>
const ImageWithTextComponent = (props) => {
  const { name, description, image, backgroundImage } = props;
  
  return (
    <BackgroundWrapper
      backgroundImage={`https://ipfs.near.social/ipfs/${backgroundImage.ipfs_cid}`}
    >
      <Widget
          src="mob.near/widget/ProfileImage"
          props={{
            fast,
            accountId,
            style: { width: "10rem", height: "10rem" },
            className: "mb-2",
            imageClassName: "rounded-circle w-100 h-100 img-thumbnail d-block",
            thumbnail: false,
          }}
        />
      <NameText>{name}</NameText>
      {/* <Markdown text={description} /> */}
    </BackgroundWrapper>
  );
};

return (
  <ImageWithTextComponent
    {...data}
    // description="A brief description about John Doe."
    // image="path_to_john_doe_image.jpg"
    // backgroundImage="path_to_background_image.jpg"
  />
);
