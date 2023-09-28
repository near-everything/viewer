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

const RectangleImageStack = () => {
  const ImageItem = styled.div`
    width: 585.151px;
    height: 425px;
    flex-shrink: 0;
    border-radius: 23px;
    background: #fffefe;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div style={{ width: "640px", height: "523px" }}>
      <div className="position-relative">
        <ImageItem>Image 2</ImageItem>
        <ImageItem
          className="position-absolute"
          style={{ bottom: "-55px", left: "98px" }}
        >
          Image 1
        </ImageItem>
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

const ExploreOS = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
    background: #f4fdfa;
  `;

  const SearchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <circle cx="7" cy="7.11414" r="7" fill="white" />
      <path
        d="M6.51906 9.15225C7.9103 9.15225 9.03812 8.02443 9.03812 6.63319C9.03812 5.24196 7.9103 4.11414 6.51906 4.11414C5.12782 4.11414 4 5.24196 4 6.63319C4 8.02443 5.12782 9.15225 6.51906 9.15225Z"
        stroke="#03B172"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.26294 8.66541L10 10.2708"
        stroke="#03B172"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );

  const relatedLinks = [
    {
      href: "#",
      name: "Built with BOS",
      details: "check out the possibilities",
    },
    {
      href: "#",
      name: "BOS Native",
      details: "see the potential",
    },
    {
      href: "#",
      name: "Integrated with BOS",
      details: "check out the possibilities",
    },
  ];

  return (
    <SectionContainer key={Math.random()}>
      <div style={{ flex: 1 }}>
        <div className="d-flex flex-column" style={{ gap: "20px" }}>
          <SectionPill name={"Explore"} />
          <SectionHeading title={"Explore"} />
          <SectionInfo info="Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam. Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio vitae." />
          <CTA>{SearchIcon} Search for components</CTA>
        </div>
        <RelatedLinks relatedLinks={relatedLinks} />
      </div>
      <div>
        <RectangleImageStack />
      </div>
    </SectionContainer>
  );
};

const LearnBOS = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
  `;

  const LinkIcon = (
    <span
      className="rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: "14px", height: "14px", background: "white" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.196 5.89628C5.08588 5.82472 4.99094 5.73216 4.91659 5.6239C4.84225 5.51564 4.78995 5.39379 4.7627 5.26532C4.73544 5.13685 4.73376 5.00427 4.75775 4.87515C4.78174 4.74602 4.83093 4.62289 4.9025 4.51278L5.993 2.83628C6.06342 2.72368 6.15556 2.62623 6.26404 2.54962C6.37253 2.47301 6.49518 2.41878 6.62486 2.39009C6.75453 2.3614 6.88862 2.35882 7.01929 2.38252C7.14997 2.40621 7.27462 2.4557 7.38596 2.52809C7.49731 2.60049 7.59312 2.69433 7.6678 2.80415C7.74248 2.91397 7.79454 3.03757 7.82093 3.16773C7.84733 3.29789 7.84753 3.432 7.82153 3.56224C7.79553 3.69248 7.74385 3.81623 7.6695 3.92628L6.5795 5.60328C6.5079 5.71343 6.41529 5.80839 6.30697 5.88273C6.19865 5.95707 6.07674 6.00934 5.94821 6.03655C5.81968 6.06376 5.68705 6.06538 5.5579 6.04131C5.42875 6.01724 5.3056 5.96796 5.1955 5.89628H5.196ZM3.975 5.99728C3.80715 5.68179 3.72692 5.32708 3.74266 4.97006C3.7584 4.61305 3.86954 4.26678 4.0645 3.96728L5.1545 2.29078C5.44372 1.84608 5.89775 1.53448 6.41671 1.42454C6.93567 1.3146 7.47705 1.41531 7.92175 1.70453C8.36645 1.99375 8.67805 2.44778 8.78799 2.96674C8.89794 3.4857 8.79722 4.02708 8.508 4.47178L7.418 6.14828C7.22834 6.44015 6.96578 6.67746 6.6563 6.83676C6.34681 6.99606 6.0011 7.07183 5.65336 7.05658C5.30561 7.04133 4.96787 6.93559 4.67351 6.7498C4.37916 6.56402 4.13839 6.30463 3.975 5.99728Z"
          fill="#03B172"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.722 7.86586C2.61188 7.79429 2.51694 7.70174 2.44259 7.59348C2.36825 7.48522 2.31595 7.36337 2.2887 7.2349C2.26145 7.10643 2.25976 6.97384 2.28375 6.84472C2.30774 6.7156 2.35693 6.59247 2.4285 6.48236L3.519 4.80586C3.58942 4.69325 3.68156 4.5958 3.79004 4.51919C3.89853 4.44258 4.02119 4.38835 4.15086 4.35966C4.28053 4.33097 4.41462 4.3284 4.5453 4.3521C4.67597 4.37579 4.80062 4.42528 4.91197 4.49767C5.02331 4.57006 5.11912 4.66391 5.1938 4.77373C5.26848 4.88355 5.32054 5.00715 5.34693 5.13731C5.37333 5.26747 5.37353 5.40158 5.34753 5.53182C5.32153 5.66206 5.26985 5.78581 5.1955 5.89586L4.1055 7.57286C3.96089 7.79517 3.73389 7.95093 3.47443 8.00588C3.21498 8.06083 2.94432 8.01046 2.722 7.86586ZM1.501 7.96686C1.33315 7.65137 1.25292 7.29666 1.26866 6.93964C1.2844 6.58263 1.39554 6.23635 1.5905 5.93686L2.6805 4.26086C2.82368 4.04066 3.00882 3.85083 3.22536 3.70218C3.4419 3.55354 3.6856 3.44901 3.94254 3.39454C4.19948 3.34008 4.46463 3.33676 4.72285 3.38477C4.98107 3.43278 5.22731 3.53118 5.4475 3.67436C5.6677 3.81753 5.85753 4.00267 6.00618 4.21921C6.15482 4.43575 6.25936 4.67945 6.31382 4.93639C6.36828 5.19333 6.3716 5.45848 6.32359 5.7167C6.27558 5.97493 6.17718 6.22116 6.034 6.44136L4.944 8.11786C4.75434 8.40973 4.49178 8.64704 4.1823 8.80634C3.87281 8.96564 3.5271 9.04141 3.17936 9.02616C2.83161 9.01091 2.49387 8.90516 2.19951 8.71938C1.90516 8.5336 1.66439 8.27421 1.501 7.96686Z"
          fill="#03B172"
        />
      </svg>
    </span>
  );

  const relatedLinks = [
    {
      href: "#",
      name: "Tutorials",
      details: "check out the possibilities",
    },
    {
      href: "#",
      name: "Code Reviews",
      details: "see the potential",
    },
    {
      href: "#",
      name: "Workshops + Webinars",
      details: "check out the possibilities",
    },
  ];

  return (
    <SectionContainer key={Math.random()}>
      <div style={{ flex: 1 }}>
        <div className="d-flex flex-column" style={{ gap: "20px" }}>
          <SectionPill name={"Learn"} />
          <SectionHeading title={"Learn"} />
          <SectionInfo info="Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam. Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio vitae." />
          <CTA>{LinkIcon} Understand blockchain technology</CTA>
        </div>
        <RelatedLinks relatedLinks={relatedLinks} />
      </div>
      <div>
        <RectangleImageStack />
      </div>
    </SectionContainer>
  );
};

const ConnectOS = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
    background: #f4fdfa;
  `;

  const ConnectIcon = (
    <span
      className="rounded-circle bg-white d-flex align-items-center justify-content-center"
      style={{ width: 14, height: 14 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <g clipPath="url(#clip0_205_1405)">
          <path
            d="M2.00797 2.47567C1.79831 2.59929 1.55075 2.6422 1.31171 2.59636C1.07267 2.55052 0.858558 2.41907 0.709505 2.22665C0.560452 2.03423 0.486693 1.79405 0.502056 1.55114C0.517419 1.30823 0.620848 1.07926 0.792955 0.907152C0.965063 0.735045 1.19403 0.631616 1.43694 0.616253C1.67986 0.60089 1.92003 0.674648 2.11245 0.823702C2.30487 0.972755 2.43632 1.18687 2.48216 1.42591C2.52801 1.66495 2.4851 1.9125 2.36147 2.12217L3.49197 3.25217C3.64585 3.1614 3.82132 3.11373 3.99997 3.11417C4.18497 3.11417 4.35897 3.16467 4.50797 3.25267L5.63797 2.12217C5.51435 1.9125 5.47144 1.66495 5.51728 1.42591C5.56312 1.18687 5.69457 0.972755 5.88699 0.823702C6.07941 0.674648 6.31959 0.60089 6.5625 0.616253C6.80541 0.631616 7.03438 0.735045 7.20649 0.907152C7.3786 1.07926 7.48203 1.30823 7.49739 1.55114C7.51275 1.79405 7.43899 2.03423 7.28994 2.22665C7.14089 2.41907 6.92677 2.55052 6.68773 2.59636C6.44869 2.6422 6.20114 2.59929 5.99147 2.47567L4.86147 3.60617C4.9526 3.75995 5.00068 3.93541 5.00068 4.11417C5.00068 4.29292 4.9526 4.46839 4.86147 4.62217L5.99197 5.75217C6.20164 5.62855 6.44919 5.58563 6.68823 5.63148C6.92727 5.67732 7.14139 5.80877 7.29044 6.00119C7.43949 6.19361 7.51325 6.43379 7.49789 6.6767C7.48253 6.91961 7.3791 7.14858 7.20699 7.32069C7.03488 7.49279 6.80591 7.59622 6.563 7.61158C6.32009 7.62695 6.07991 7.55319 5.88749 7.40414C5.69508 7.25508 5.56362 7.04097 5.51778 6.80193C5.47194 6.56289 5.51485 6.31533 5.63847 6.10567L4.50797 4.97567C4.35415 5.06662 4.17867 5.11446 3.99997 5.11417C3.82127 5.11446 3.6458 5.06662 3.49197 4.97567L2.36197 6.10617C2.4856 6.31583 2.52851 6.56339 2.48266 6.80243C2.43682 7.04147 2.30537 7.25558 2.11295 7.40464C1.92053 7.55369 1.68036 7.62745 1.43744 7.61208C1.19453 7.59672 0.965563 7.49329 0.793455 7.32119C0.621348 7.14908 0.517919 6.92011 0.502556 6.6772C0.487193 6.43429 0.560952 6.19411 0.710005 6.00169C0.859058 5.80927 1.07317 5.67782 1.31221 5.63198C1.55125 5.58613 1.79881 5.62905 2.00847 5.75267L3.13847 4.62217C3.04753 4.46834 2.99968 4.29287 2.99997 4.11417C2.99997 3.92917 3.05047 3.75517 3.13847 3.60617L2.00797 2.47567Z"
            fill="#03B172"
          />
        </g>
        <defs>
          <clipPath id="clip0_205_1405">
            <rect
              width="8"
              height="8"
              fill="white"
              transform="translate(0 0.114258)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );

  const relatedLinks = [
    {
      href: "#",
      name: "Developer Communities",
      details: "check out the possibilities",
    },
    {
      href: "#",
      name: "Project Communities",
      details: "see the potential",
    },
    {
      href: "#",
      name: "Event Calendar",
      details: "check out the possibilities",
    },
  ];

  return (
    <SectionContainer key={Math.random()}>
      <div style={{ flex: 1 }}>
        <div className="d-flex flex-column" style={{ gap: "20px" }}>
          <SectionPill name={"Connect"} />
          <SectionHeading title={"Connect"} />
          <SectionInfo info="Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam. Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio vitae." />
          <CTA>{ConnectIcon} Join a community</CTA>
        </div>
        <RelatedLinks relatedLinks={relatedLinks} />
      </div>
      <div>
        <RectangleImageStack />
      </div>
    </SectionContainer>
  );
};

const BuildOS = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
  `;

  const ConnectIcon = (
    <span
      className="rounded-circle bg-white d-flex align-items-center justify-content-center"
      style={{ width: 14, height: 14 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <g clipPath="url(#clip0_205_1405)">
          <path
            d="M2.00797 2.47567C1.79831 2.59929 1.55075 2.6422 1.31171 2.59636C1.07267 2.55052 0.858558 2.41907 0.709505 2.22665C0.560452 2.03423 0.486693 1.79405 0.502056 1.55114C0.517419 1.30823 0.620848 1.07926 0.792955 0.907152C0.965063 0.735045 1.19403 0.631616 1.43694 0.616253C1.67986 0.60089 1.92003 0.674648 2.11245 0.823702C2.30487 0.972755 2.43632 1.18687 2.48216 1.42591C2.52801 1.66495 2.4851 1.9125 2.36147 2.12217L3.49197 3.25217C3.64585 3.1614 3.82132 3.11373 3.99997 3.11417C4.18497 3.11417 4.35897 3.16467 4.50797 3.25267L5.63797 2.12217C5.51435 1.9125 5.47144 1.66495 5.51728 1.42591C5.56312 1.18687 5.69457 0.972755 5.88699 0.823702C6.07941 0.674648 6.31959 0.60089 6.5625 0.616253C6.80541 0.631616 7.03438 0.735045 7.20649 0.907152C7.3786 1.07926 7.48203 1.30823 7.49739 1.55114C7.51275 1.79405 7.43899 2.03423 7.28994 2.22665C7.14089 2.41907 6.92677 2.55052 6.68773 2.59636C6.44869 2.6422 6.20114 2.59929 5.99147 2.47567L4.86147 3.60617C4.9526 3.75995 5.00068 3.93541 5.00068 4.11417C5.00068 4.29292 4.9526 4.46839 4.86147 4.62217L5.99197 5.75217C6.20164 5.62855 6.44919 5.58563 6.68823 5.63148C6.92727 5.67732 7.14139 5.80877 7.29044 6.00119C7.43949 6.19361 7.51325 6.43379 7.49789 6.6767C7.48253 6.91961 7.3791 7.14858 7.20699 7.32069C7.03488 7.49279 6.80591 7.59622 6.563 7.61158C6.32009 7.62695 6.07991 7.55319 5.88749 7.40414C5.69508 7.25508 5.56362 7.04097 5.51778 6.80193C5.47194 6.56289 5.51485 6.31533 5.63847 6.10567L4.50797 4.97567C4.35415 5.06662 4.17867 5.11446 3.99997 5.11417C3.82127 5.11446 3.6458 5.06662 3.49197 4.97567L2.36197 6.10617C2.4856 6.31583 2.52851 6.56339 2.48266 6.80243C2.43682 7.04147 2.30537 7.25558 2.11295 7.40464C1.92053 7.55369 1.68036 7.62745 1.43744 7.61208C1.19453 7.59672 0.965563 7.49329 0.793455 7.32119C0.621348 7.14908 0.517919 6.92011 0.502556 6.6772C0.487193 6.43429 0.560952 6.19411 0.710005 6.00169C0.859058 5.80927 1.07317 5.67782 1.31221 5.63198C1.55125 5.58613 1.79881 5.62905 2.00847 5.75267L3.13847 4.62217C3.04753 4.46834 2.99968 4.29287 2.99997 4.11417C2.99997 3.92917 3.05047 3.75517 3.13847 3.60617L2.00797 2.47567Z"
            fill="#03B172"
          />
        </g>
        <defs>
          <clipPath id="clip0_205_1405">
            <rect
              width="8"
              height="8"
              fill="white"
              transform="translate(0 0.114258)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );

  const relatedLinks = [
    {
      href: "#",
      name: "Search",
      details: "check out the possibilities",
    },
    {
      href: "#",
      name: "Components",
      details: "see the potential",
    },
    {
      href: "#",
      name: "Accelerator Programs",
      details: "check out the possibilities",
    },
  ];

  return (
    <SectionContainer key={Math.random()}>
      <div style={{ flex: 1 }}>
        <div className="d-flex flex-column" style={{ gap: "20px" }}>
          <SectionPill name={"Build"} />
          <SectionHeading title={"Build"} />
          <SectionInfo info="Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam. Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio vitae." />
          <CTA>{ConnectIcon} Join a community</CTA>
        </div>
        <RelatedLinks relatedLinks={relatedLinks} />
      </div>
      <div>
        <RectangleImageStack />
      </div>
    </SectionContainer>
  );
};

return (
  <div>
    <Widget src="devs.near/widget/HomeHero" />
    <Widget src="devs.near/widget/HomeWhatIsBOS" />
    <ExploreOS />
    <LearnBOS />
    <ConnectOS />
    <BuildOS />
    <Widget src="devs.near/widget/HomeProjects" />
    <Widget src="devs.near/widget/HomeBuilders" />
    <Widget src="devs.near/widget/HomeUpcomingEvents" />
    <Widget src="devs.near/widget/HomeExplore" />
  </div>
);
