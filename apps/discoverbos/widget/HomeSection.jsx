const data = props.data;
const {
  title,
  description,
  cta,
  ctaIcon,
  ctaLink,
  images,
  relatedLinks,
  background,
} = data;

const SectionPill = ({ name }) => {
  const PillContainer = styled.div`
    display: flex;
    width: min-content;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 1rem;
    background: #d6feef;
  `;

  const SectionName = styled.p`
    color: #1b1b18;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 2px;
    padding: 0;
  `;

  return (
    <PillContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8.11414" r="8" fill="url(#paint0_linear_205_1217)" />
        <defs>
          <linearGradient
            id="paint0_linear_205_1217"
            x1="8"
            y1="0.114136"
            x2="8"
            y2="16.1141"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#03B172" />
            <stop offset="1" stopColor="#05EB97" />
          </linearGradient>
        </defs>
      </svg>
      <SectionName>{name}</SectionName>
    </PillContainer>
  );
};

const SectionDetial = ({ text }) => {
  const Details = styled.p`
    color: #767676;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;

  return <Details>{text}</Details>;
};

const SectionHeading = ({ title }) => {
  const Heading = styled.h2`
    display: flex;
    color: #1b1b18;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 49.68px */
  `;

  const Span = styled.span`
    color: #03b172;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%;
  `;

  return (
    <Heading>
      {title}
      <Span>OS</Span>
    </Heading>
  );
};

const SectionInfo = ({ info }) => {
  const Info = styled.p`
    color: #1b1b18;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
  `;

  return <Info>{info}</Info>;
};

const RectangleImageStack = ({ images }) => {
  const ImageItem = styled.img`
    width: 585.151px;
    height: 425px;
    flex-shrink: 0;
    border-radius: 23px;
    background: #fffefe;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    object-fit: cover;
    justify-content: center;
  `;
  return (
    <div style={{ width: "685px", height: "480px" }}>
      <div className="position-relative">
        <ImageItem src={images[1]} />
        <ImageItem
          className="position-absolute"
          style={{ bottom: "-55px", left: "98px" }}
          src={images[0]}
        />
      </div>
    </div>
  );
};

const Related = styled.p`
  color: #1b1b18;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120.5%; /* 18.075px */
`;

const Links = styled.a`
  color: #306cfe;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.5%; /* 18.075px */
`;

const CTA = styled.button`
  width: max-content;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  border-radius: 3px;
  background: #03b172;
  border: none;
  outline: none;

  &:hover {
    color: white;
    background: #028656;
  }

  &:active {
    border: none;
    outline: none;
  }
`;

const RelatedLinks = ({ relatedLinks }) => {
  return (
    <div style={{ marginTop: "40px" }} className="d-flex flex-column gap-2">
      <Related className="m-0">Related</Related>
      {relatedLinks.map((link) => (
        <div style={{ fontSize: 15 }} key={`${link.name}-${Math.random()}`}>
          <Links href={link.href}>{link.name}</Links> {link.details}
        </div>
      ))}
    </div>
  );
};

const HomeSection = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
    display: flex;
    flex-direction: ${!background ? "row-reverse" : "row"};
    align-items: center;
    justify-content: center;
    gap: 120px;
    background: ${background === "colored" ? "#F4FDFA" : "white"};
  `;

  return (
    <SectionContainer key={Math.random()}>
      <div style={{ flex: 1 }}>
        <div className="d-flex flex-column" style={{ gap: "20px" }}>
          <SectionPill name={title} />
          <SectionHeading title={title} />
          <SectionInfo info={description} />
          <CTA href={ctaLink}>
            {ctaIcon} {cta}
          </CTA>
        </div>
        <RelatedLinks relatedLinks={relatedLinks} />
      </div>
      <div>
        <RectangleImageStack images={images} />
      </div>
    </SectionContainer>
  );
};

return <HomeSection />;
