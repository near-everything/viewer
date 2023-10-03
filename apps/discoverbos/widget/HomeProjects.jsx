State.init({
  projectsIndex: 0,
  mobileIndex: 0,
});

const ProjectCard = () => {
  const sampleImage =
    "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  const ProjectImage = styled.img`
    height: 232px;
    border-radius: 16px;
    box-shadow: 0px 6px 20px -4px rgba(55, 74, 89, 0.36);
    object-fit: cover;
  `;

  const Card = styled.div`
    border-radius: 24px;
    border: 1px solid #cfcfcf;
    background: #fff;
    box-shadow: 0px 12px 18px 0px rgba(0, 0, 0, 0.07);
  `;

  const Time = styled.div`
    color: #6e798c;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

  const ProjectTitle = styled.p`
    color: #081f32;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  `;

  const ProjectDetails = styled.p`
    color: #374a59;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    margin: 0;
  `;

  const BuilderInfo = () => {
    const BuilderLogo = styled.img`
      width: 45px;
      height: 45px;
      border-radius: 45px;
    `;
    const BuilderName = styled.p`
      color: #081f32;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    `;

    const LikeButton = styled.button`
      display: flex;
      height: 47px;
      padding: 12px 16px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      border-radius: 8px;
      background: #dbdbdb;

      border: none;
      outline: none;

      &:hover {
        border: none;
        outline: none;
      }

      &:active {
        border: none;
        outline: none;
      }
    `;

    return (
      <div className="d-flex gap-3 align-items-center">
        <div>
          <BuilderLogo src="https://plus.unsplash.com/premium_photo-1668004507519-20874dc42842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80" />
        </div>
        <BuilderName className="flex-grow-1">Builder Name</BuilderName>
        <LikeButton>
          <i className="bi bi-heart"></i>
        </LikeButton>
      </div>
    );
  };

  return (
    <Card
      className="p-4 d-flex flex-column gap-4"
      style={{ width: "min-content" }}
      key={Math.random()}
    >
      <ProjectImage src={sampleImage} />
      <div className="d-flex flex-column gap-3">
        <div className="d-flex">
          <Tag>{HashTag} modal</Tag>
          <Time className="ms-auto">1 week ago</Time>
        </div>
        <ProjectTitle>Super Cool Project</ProjectTitle>
        <ProjectDetails>
          Luas dan nyaman. meski belum berani kemana-mana karena kondisi
          pandemi. hanya menilmati kamar dan sarapan. pelayanannya ramah.
        </ProjectDetails>
        <BuilderInfo />
      </div>
    </Card>
  );
};

const FeaturedProjects = () => {
  const SectionContainer = styled.div`
    padding: 154px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    @media (width <= 800px) {
      display: none;
    }
  `;

  const SectionHeading = styled.h2`
    color: #1b1b18;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 49.68px */
  `;

  const SectionDescription = styled.p`
    max-width: 1042px;
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
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
  `;

  const projects = [
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
  ];

  const nextProjects = () => {
    State.update({ projectsIndex: state.projectsIndex + 3 });
  };
  const previousProjects = () =>
    State.update({ projectsIndex: state.projectsIndex - 3 });

  const endIndex = state.projectsIndex + 3;

  const ResponsiveCards = styled.div`
    @media (width <= 1435px) {
      flex-wrap: wrap;
      justify-content: center !important;
      gap: 40px !important;
    }
  `;

  return (
    <SectionContainer>
      <div className="d-flex justify-content-between w-100">
        <div>
          <SectionHeading>Featured Projects</SectionHeading>
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet
            tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam.
            Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio
            vitae.
          </SectionDescription>
        </div>
        <div className="ms-auto d-flex gap-3 mt-auto">
          <NavigationButton
            disabled={state.projectsIndex === 0}
            className={state.projectsIndex === 0 && "inactive"}
          >
            <i className="bi bi-chevron-left" onClick={previousProjects}></i>
          </NavigationButton>
          <NavigationButton
            disabled={endIndex > projects.length}
            className={endIndex > projects.length && "inactive"}
          >
            <i className="bi bi-chevron-right" onClick={nextProjects}></i>
          </NavigationButton>
        </div>
      </div>
      <ResponsiveCards
        className="d-flex justify-content-between align-items-center mx-auto"
        style={{ gap: 80 }}
      >
        {projects.slice(state.projectsIndex, endIndex).map((_) => (
          <ProjectCard key={`project-${Math.random()}`} />
        ))}
      </ResponsiveCards>
    </SectionContainer>
  );
};

const MobileProjects = () => {
  const Container = styled.div`
    display: none;

    @media (width <= 800px) {
      display: flex;
      flex-direction: column;
      padding: 60px 16px;
    }
  `;

  const Heading = styled.h2`
    color: #1b1b18;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 33.12px */
    margin-bottom: 32px;
  `;

  const Description = styled.p`
    color: #1b1b18;
    font-family: Mona Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */

    margin-bottom: 40px;
  `;

  const MobileProjectCard = () => {
    const Card = styled.div`
      border-radius: 24px;
      box-shadow: 0px 12px 18px 0px rgba(0, 0, 0, 0.07);

      display: flex;
      flex-direction: column;

      margin-bottom: 24px;
    `;

    const CardImage = styled.img`
      width: 100%;
      height: 12.5rem;

      object-fit: cover;

      border-radius: 16px 16px 0px 0px;
      box-shadow: 0px 6px 20px -4px rgba(55, 74, 89, 0.36);
    `;

    const LikeButton = styled.div`
      position: absolute;

      bottom: 10px;
      right: 10px;

      border-radius: 8px;
      background: #dbdbdb;

      display: inline-flex;
      height: 47px;
      padding: 12px 16px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    `;

    const HeartIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M13.9062 2.30957C12.3367 2.30957 10.9438 2.9291 10 3.99395C9.05625 2.9291 7.66328 2.30957 6.09375 2.30957C4.72674 2.31122 3.41618 2.855 2.44956 3.82163C1.48293 4.78825 0.939154 6.09881 0.9375 7.46582C0.9375 13.1174 9.20391 17.633 9.55547 17.8229C9.69209 17.8964 9.84483 17.9349 10 17.9349C10.1552 17.9349 10.3079 17.8964 10.4445 17.8229C10.7961 17.633 19.0625 13.1174 19.0625 7.46582C19.0608 6.09881 18.5171 4.78825 17.5504 3.82163C16.5838 2.855 15.2733 2.31122 13.9062 2.30957ZM13.4773 13.4314C12.3893 14.3548 11.2261 15.1858 10 15.9158C8.77387 15.1858 7.61073 14.3548 6.52266 13.4314C4.82969 11.9791 2.8125 9.76426 2.8125 7.46582C2.8125 6.59558 3.1582 5.76098 3.77356 5.14563C4.38891 4.53027 5.22351 4.18457 6.09375 4.18457C7.48438 4.18457 8.64844 4.91895 9.13203 6.10176C9.20242 6.27419 9.32257 6.42174 9.47715 6.52561C9.63174 6.62948 9.81376 6.68495 10 6.68495C10.1862 6.68495 10.3683 6.62948 10.5228 6.52561C10.6774 6.42174 10.7976 6.27419 10.868 6.10176C11.3516 4.91895 12.5156 4.18457 13.9062 4.18457C14.7765 4.18457 15.6111 4.53027 16.2264 5.14563C16.8418 5.76098 17.1875 6.59558 17.1875 7.46582C17.1875 9.76426 15.1703 11.9791 13.4773 13.4314Z"
          fill="#767676"
        />
      </svg>
    );

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

      width: max-content;
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

    const Time = styled.p`
      color: #6e798c;
      font-family: Mona Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      margin: 0;
    `;

    const CardTitle = styled.h3`
      color: #081f32;
      font-family: Mona Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      margin: 0;
    `;

    const CardDetails = styled.p`
      color: #374a59;
      font-family: Mona Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 16.8px */

      margin: 0;
    `;

    const BuilderInfo = () => {
      const BuilderLogo = styled.img`
        width: 45px;
        height: 45px;
        border-radius: 45px;
      `;
      const BuilderName = styled.p`
        color: #081f32;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0;
      `;

      return (
        <div className="d-flex gap-3 align-items-center">
          <BuilderLogo src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <BuilderName>Builder Name</BuilderName>
        </div>
      );
    };
    return (
      <Card>
        <div className="position-relative">
          <CardImage src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <LikeButton>{HeartIcon}</LikeButton>
        </div>
        <div style={{ padding: 24 }} className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <Tag>{HashTag} modal</Tag>
            <Time>1 week ago</Time>
          </div>
          <CardTitle>Super Cool Project Title</CardTitle>
          <CardDetails>
            Luas dan nyaman. meski belum berani kemana-mana karena kondisi
            pandemi. hanya menilmati kamar dan sarapan...
          </CardDetails>
          <BuilderInfo />
        </div>
      </Card>
    );
  };

  const NavigationButton = styled.button`
    border: none;
    outline: none;
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    background: #03b172;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50rem;

    i {
      padding: 15px;
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
  `;

  const projects = [
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
    { asd: "" },
  ];

  const nextProjects = () => {
    State.update({ mobileIndex: state.mobileIndex + 1 });
  };
  const previousProjects = () =>
    State.update({ mobileIndex: state.mobileIndex - 1 });

  const endIndex = state.mobileIndex + 1;

  return (
    <>
      <Container>
        <div>
          <Heading>Featured Projects</Heading>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet
            tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam.
            Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio
            vitae.
          </Description>
        </div>
        <div>
          {projects.slice(state.mobileIndex, endIndex).map((_) => (
            <MobileProjectCard key={`project-${Math.random()}`} />
          ))}
        </div>

        <div className="mx-auto d-flex gap-3">
          <NavigationButton
            disabled={state.mobileIndex === 0}
            className={state.mobileIndex === 0 && "inactive"}
          >
            <i className="bi bi-chevron-left" onClick={previousProjects}></i>
          </NavigationButton>
          <NavigationButton
            disabled={endIndex >= projects.length}
            className={endIndex >= projects.length && "inactive"}
          >
            <i className="bi bi-chevron-right" onClick={nextProjects}></i>
          </NavigationButton>
        </div>
      </Container>
    </>
  );
};

return (
  <>
    <FeaturedProjects />
    <MobileProjects />
  </>
);
