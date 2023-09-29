State.init({
  events: [
    {
      name: "Test 1",
      image:
        "https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80",
    },
    {
      name: "Test 2",
      image:
        "https://images.unsplash.com/photo-1667808926971-5d2ce805edf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Test 3",
      image:
        "https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80",
    },
    {
      name: "Test 4",
      image:
        "https://images.unsplash.com/photo-1667808926971-5d2ce805edf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ],
  activeIndex: 0,
});

const Tag = styled.div`
  margin-top: 1rem;
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

  return <Heading>{title}</Heading>;
};

const SectionInfo = ({ info }) => {
  const Info = styled.p`
    color: #1b1b18;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
    width: 1042px;
  `;

  return <Info>{info}</Info>;
};

const Event = () => {
  const event = state.events[state.activeIndex];

  const EventDetails = styled.div`
    border-radius: 8px 0px 0px 8px;
    background: #f5f5f5;
    padding: 1rem;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const EventImage = styled.div`
    border-radius: 0px 8px 8px 0px;
    background: #f5f5f5;
    height: 100%;
    flex: 1;
  `;

  const EventTime = styled.p`
    color: var(--Eerie-Black, #1b1b18);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;

  const EventName = styled.h2`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 2.75rem;
  `;

  const EventDescription = styled.p`
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
    margin: 24px 0;
  `;

  const CTA = styled.button`
    display: flex;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 30px;
    background: var(--Munsell-Green, #03b172);

    color: #fcfcfb;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    border: none;
    outline: none;

    width: max-content;

    &:hover {
      background: #028052;
      color: white;
    }

    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  `;

  return (
    <div
      className="d-flex align-items-center justify-content-between w-100"
      style={{ height: "28rem" }}
    >
      <EventDetails>
        <div className="d-flex flex-column justify-content-center align-content-center">
          <div className="d-flex gap-3">
            <EventTime>Oct 24</EventTime>
            <EventTime>10:30 AM - 1:30 PM</EventTime>
          </div>
          <EventName>{event.name}</EventName>
          <Tag>{HashTag} hackathon</Tag>
          <EventDescription>
            Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet
            tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam.
            Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio
            vitae.
          </EventDescription>
          <CTA>Register Now</CTA>
        </div>
      </EventDetails>
      <EventImage>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0px 8px 8px 0px",
          }}
          src={event.image}
        />
      </EventImage>
    </div>
  );
};

const EventsNavigation = styled.button`
  background: #fff;
  border-radius: 50rem;
  width: 45px;
  height: 45px;
  font-size: 1.25rem;

  border: none;
  outline: none;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const NavigationIndicator = () => {
  const EmptyCircle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <circle cx="8.5" cy="8.11426" r="7.5" stroke="#1B1B18" />
    </svg>
  );

  const FilledCircle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <circle cx="8.5" cy="8.11426" r="8" fill="#03B172" />
    </svg>
  );

  return (
    <div className="d-flex gap-2">
      {state.events.map((_, idx) => (
        <div
          onClick={() => State.update({ activeIndex: idx })}
          style={{ cursor: "pointer" }}
        >
          {idx === state.activeIndex ? FilledCircle : EmptyCircle}
        </div>
      ))}
    </div>
  );
};

const UpcomingEvents = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
  `;

  const onNextEvent = () =>
    State.update({
      activeIndex: (state.activeIndex + 1) % state.events.length,
    });

  const onPreviousEvent = () => {
    State.update({
      activeIndex:
        (state.activeIndex + state.events.length - 1) % state.events.length,
    });
  };

  return (
    <SectionContainer key={Math.random()}>
      <div className="d-flex flex-column w-100" style={{ gap: "20px" }}>
        <SectionHeading title={"Upcoming Events"} />
        <SectionInfo info="Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam. Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio vitae." />
      </div>
      <div
        className="w-100 d-flex align-items-center justify-content-center flex-column gap-3"
        style={{ marginTop: "32px" }}
      >
        <div className="d-flex align-items-center justify-content-center gap-2">
          <EventsNavigation onClick={onPreviousEvent}>
            <i className="bi bi-chevron-left"></i>
          </EventsNavigation>
          <Event />
          <EventsNavigation onClick={onNextEvent}>
            <i className="bi bi-chevron-right"></i>
          </EventsNavigation>
        </div>
        <NavigationIndicator />
      </div>
    </SectionContainer>
  );
};

return <UpcomingEvents />;
