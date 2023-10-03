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
    max-width: 280px;
    color: #767676;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;

  return <Details>{text}</Details>;
};

const WhatIsBOS = () => {
  const Container = styled.div`
    padding: 154px 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (width <= 800px) {
      padding: 60px 16px;
    }
  `;

  const SectionHeading = styled.h2`
    color: #1b1b18;
    font-family: Poppins;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 49.68px */
    margin-bottom: 2rem;

    @media (width <= 800px) {
      color: #1b1b18;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 103.5%; /* 33.12px */
    }
  `;

  const HeadingSpan = styled.span`
    color: #03b172;
    font-family: Poppins;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%;

    @media (width <= 800px) {
      color: #03b172;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 103.5%;
    }
  `;

  const SectionParagraph = styled.p`
    max-width: 1024px;
    color: #1b1b18;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */

    @media (width <= 800px) {
      color: #1b1b18;
      font-family: Mona Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120.5%; /* 19.28px */
    }
  `;

  const SectionBox = ({ title, text }) => {
    return (
      <div className="d-flex flex-column gap-3">
        <SectionPill name={title} />
        <SectionDetial text={text} />
      </div>
    );
  };

  const sections = [
    {
      title: "Explore",
      text: "Lorem ipsum dolor sit facilisis amet consectetur. Viverra volutpat facilisis lobortis phasellus.",
    },
    {
      title: "Learn",
      text: "Lorem ipsum dolor sit facilisis amet consectetur. Viverra volutpat facilisis lobortis phasellus.",
    },
    {
      title: "Connect",
      text: "Lorem ipsum dolor sit facilisis amet consectetur. Viverra volutpat facilisis lobortis phasellus.",
    },
    {
      title: "Build",
      text: "Lorem ipsum dolor sit facilisis amet consectetur. Viverra volutpat facilisis lobortis phasellus.",
    },
  ];

  const ResponsiveContainer = styled.div`
    gap: 80px;

    @media (width <= 800px) {
      gap: 32px;
    }
  `;

  const SectionsContainer = styled.div`
    @media (width <= 800px) {
      /* flex-direction: column !important; */
      flex-wrap: wrap;
      gap: 60px;
    }
  `;

  return (
    <Container>
      <ResponsiveContainer className="d-flex flex-column w-100">
        <div>
          <SectionHeading>
            What is Discoverb<HeadingSpan>OS</HeadingSpan>?
          </SectionHeading>
          <SectionParagraph>
            Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet
            tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam.
            Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio
            vitae.
          </SectionParagraph>
        </div>
        <SectionsContainer className="d-flex justify-content-between gap-3">
          {sections.map((section) => (
            <SectionBox {...section} key={`section-${Math.random()}`} />
          ))}
        </SectionsContainer>
      </ResponsiveContainer>
    </Container>
  );
};

return <WhatIsBOS />;
