State.init({
  buildersIndex: 0,
  mobileIndex: 0,
});

const BuilderCard = () => {
  const Card = styled.div`
    width: 16rem;
    border-radius: 24px;
    border: 1px solid #cfcfcf;
    background: #fff;

    /* Accentuate drop shadow */
    box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);

    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 16px;

    @media (width <= 800px) {
      width: 100%;
    }
  `;

  const BuilderLogo = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50rem;
    object-fit: cover;
  `;

  const Tag = styled.div`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid #6792ff;
    padding: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const HashTag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.3334 6.11409C13.3334 5.74743 13.0334 5.44743 12.6667 5.44743H10.6667V3.44743C10.6667 3.08076 10.3667 2.78076 10 2.78076C9.63335 2.78076 9.33335 3.08076 9.33335 3.44743V5.44743H6.66669V3.44743C6.66669 3.08076 6.36669 2.78076 6.00002 2.78076C5.63335 2.78076 5.33335 3.08076 5.33335 3.44743V5.44743H3.33335C2.96669 5.44743 2.66669 5.74743 2.66669 6.11409C2.66669 6.48076 2.96669 6.78076 3.33335 6.78076H5.33335V9.44743H3.33335C2.96669 9.44743 2.66669 9.74743 2.66669 10.1141C2.66669 10.4808 2.96669 10.7808 3.33335 10.7808H5.33335V12.7808C5.33335 13.1474 5.63335 13.4474 6.00002 13.4474C6.36669 13.4474 6.66669 13.1474 6.66669 12.7808V10.7808H9.33335V12.7808C9.33335 13.1474 9.63335 13.4474 10 13.4474C10.3667 13.4474 10.6667 13.1474 10.6667 12.7808V10.7808H12.6667C13.0334 10.7808 13.3334 10.4808 13.3334 10.1141C13.3334 9.74743 13.0334 9.44743 12.6667 9.44743H10.6667V6.78076H12.6667C13.0334 6.78076 13.3334 6.48076 13.3334 6.11409ZM9.33335 9.44743H6.66669V6.78076H9.33335V9.44743Z"
        fill="#6792FF"
      />
    </svg>
  );

  const BuilderName = styled.p`
    color: var(--Eerie-Black, #1b1b18);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
    letter-spacing: 0.2px;
  `;

  const Stats = ({ title, count }) => {
    const Title = styled.p`
      color: #5c5f62;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      letter-spacing: 0.2px;
      margin: 0;
    `;

    const Count = styled.p`
      color: #03b172;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      letter-spacing: 0.2px;
      margin: 0;
    `;
    return (
      <div className="d-flex flex-column align-items-center">
        <Title>{title}</Title>
        <Count>{count}</Count>
      </div>
    );
  };

  return (
    <Card key={Math.random()}>
      <BuilderLogo src="https://plus.unsplash.com/premium_photo-1668004507519-20874dc42842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80" />
      <div className="d-flex flex-column gap-2 align-items-center w-100">
        <BuilderName className="m-0">Builder Name</BuilderName>
        <div className="d-flex gap-1">
          <Tag>{HashTag} artist</Tag>
          <Tag>{HashTag} nft</Tag>
          <Tag>+3</Tag>
        </div>
        <div className="d-flex justify-content-center gap-4 w-100">
          <Stats title={"Posts"} count={"52"} />
          <Stats title={"Followers"} count={"21"} />
          <Stats title={"NFTs"} count={"7"} />
        </div>
      </div>
    </Card>
  );
};

const FeaturedBuilders = () => {
  const SectionContainer = styled.div`
    padding: 154px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    background: #f4fdfa;

    @media (width <= 800px) {
      padding: 60px 1rem;
      gap: 40px;
    }
  `;

  const SectionHeading = styled.h2`
    color: #1b1b18;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 49.68px */

    @media (width <= 800px) {
      font-size: 32px;
      line-height: 103.5%; /* 33.12px */
      margin-bottom: 2rem;
    }
  `;

  const SectionDescription = styled.p`
    max-width: 1042px;
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
    margin: 0;
  `;

  const NavigationButton = styled.button`
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background: #03b172;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50rem;

    i {
      padding: 25px;
    }

    &:hover {
      border: none;
      outline: none;
    }

    &:active {
      border: none;
      outline: none;
    }

    &.inactive {
      color: #58525b;
      background: #c0c0c0;
      cursor: not-allowed;
    }

    @media (width <= 800px) {
      width: 35px;
      height: 35px;
    }
  `;

  const builders = [
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
  ];

  const nextBuilders = () => {
    State.update({ buildersIndex: state.buildersIndex + 4 });
  };
  const previousBuilders = () =>
    State.update({ buildersIndex: state.buildersIndex - 4 });
  const endIndex = state.buildersIndex + 4;

  // Mobile
  const nextMobile = () => {
    State.update({ mobileIndex: state.mobileIndex + 1 });
  };
  const previousMobile = () =>
    State.update({ mobileIndex: state.mobileIndex - 1 });
  const mobileEndIndex = state.mobileIndex + 1;

  const DesktopNavigation = styled.div`
    @media (width <= 800px) {
      display: none !important;
    }
  `;

  const DesktopCards = styled.div`
    @media (width <= 800px) {
      display: none !important;
    }
  `;

  const MobileCards = styled.div`
    display: none;

    @media (width <= 800px) {
      display: block;
      width: 100%;
    }
  `;

  return (
    <SectionContainer>
      <div className="d-flex justify-content-between w-100">
        <div>
          <SectionHeading>Featured Builders</SectionHeading>
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet
            tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam.
            Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio
            vitae.
          </SectionDescription>
        </div>
        <DesktopNavigation className="ms-auto d-flex gap-3 mt-auto">
          <NavigationButton
            disabled={state.buildersIndex === 0}
            className={state.buildersIndex === 0 && "inactive"}
          >
            <i className="bi bi-chevron-left" onClick={previousBuilders}></i>
          </NavigationButton>
          <NavigationButton
            disabled={endIndex > builders.length}
            className={endIndex > builders.length && "inactive"}
          >
            <i className="bi bi-chevron-right" onClick={nextBuilders}></i>
          </NavigationButton>
        </DesktopNavigation>
      </div>
      <DesktopCards className="d-flex gap-5 flex-wrap align-items-center w-100 justify-content-center">
        {builders.slice(state.buildersIndex, endIndex).map((_) => (
          <BuilderCard key={`Builder-${Math.random()}`} />
        ))}
      </DesktopCards>
      <MobileCards>
        {builders.slice(state.mobileIndex, mobileEndIndex).map((_) => (
          <BuilderCard key={`Builder-${Math.random()}`} />
        ))}
      </MobileCards>
      <MobileCards>
        <div className="d-flex justify-content-center w-100 gap-3">
          <NavigationButton
            disabled={state.mobileIndex === 0}
            className={state.mobileIndex === 0 && "inactive"}
          >
            <i className="bi bi-chevron-left" onClick={previousMobile}></i>
          </NavigationButton>
          <NavigationButton
            disabled={mobileEndIndex >= builders.length}
            className={mobileEndIndex >= builders.length && "inactive"}
          >
            <i className="bi bi-chevron-right" onClick={nextMobile}></i>
          </NavigationButton>
        </div>
      </MobileCards>
    </SectionContainer>
  );
};

return <FeaturedBuilders />;
