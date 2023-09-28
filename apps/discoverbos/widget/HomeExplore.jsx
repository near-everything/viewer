const Container = styled.div`
  padding: 100px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;
`;

const SectionHeading = styled.h2`
  color: #1b1b18;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 103.5%; /* 49.68px */
  margin-bottom: 40px;
`;

const ExploreCard = ({ title, description }) => {
  const Title = styled.p`
    color: #1b1b18;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120.5%; /* 28.92px */
    margin: 0;
  `;

  const Description = styled.p`
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
    margin: 0;
  `;

  return (
    <div className="d-flex p-3 gap-3" style={{ width: 475 }}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M16.2684 3.11426C13.6972 3.11426 11.1838 3.87669 9.04596 5.30515C6.90813 6.73361 5.24188 8.76393 4.25794 11.1394C3.274 13.5148 3.01656 16.1287 3.51817 18.6504C4.01978 21.1722 5.25791 23.4886 7.07599 25.3066C8.89407 27.1247 11.2105 28.3629 13.7322 28.8645C16.254 29.3661 18.8678 29.1086 21.2433 28.1247C23.6187 27.1408 25.649 25.4745 27.0775 23.3367C28.5059 21.1988 29.2684 18.6854 29.2684 16.1143C29.2647 12.6676 27.8939 9.36307 25.4567 6.92589C23.0196 4.48871 19.7151 3.1179 16.2684 3.11426ZM12.9721 21.1143H19.5646C18.8934 23.4068 17.7684 25.473 16.2684 27.1005C14.7684 25.473 13.6434 23.4068 12.9721 21.1143ZM12.5184 19.1143C12.1867 17.128 12.1867 15.1005 12.5184 13.1143H20.0184C20.35 15.1005 20.35 17.128 20.0184 19.1143H12.5184ZM5.26838 16.1143C5.26751 15.0998 5.4076 14.0902 5.68463 13.1143H10.4921C10.1938 15.1031 10.1938 17.1254 10.4921 19.1143H5.68463C5.4076 18.1384 5.26751 17.1287 5.26838 16.1143ZM19.5646 11.1143H12.9721C13.6434 8.82176 14.7684 6.75551 16.2684 5.12801C17.7684 6.75551 18.8934 8.82176 19.5646 11.1143ZM22.0446 13.1143H26.8521C27.4071 15.0758 27.4071 17.1528 26.8521 19.1143H22.0446C22.343 17.1254 22.343 15.1031 22.0446 13.1143ZM26.0646 11.1143H21.6359C21.1255 9.10615 20.2685 7.20256 19.1034 5.48926C20.5919 5.88928 21.9803 6.59641 23.1792 7.56517C24.3781 8.53393 25.361 9.74287 26.0646 11.1143ZM13.4334 5.48926C12.2682 7.20256 11.4112 9.10615 10.9009 11.1143H6.47213C7.17579 9.74287 8.15866 8.53393 9.35756 7.56517C10.5564 6.59641 11.9448 5.88928 13.4334 5.48926ZM6.47213 21.1143H10.9009C11.4112 23.1224 12.2682 25.026 13.4334 26.7393C11.9448 26.3392 10.5564 25.6321 9.35756 24.6633C8.15866 23.6946 7.17579 22.4856 6.47213 21.1143ZM19.1034 26.7393C20.2685 25.026 21.1255 23.1224 21.6359 21.1143H26.0646C25.361 22.4856 24.3781 23.6946 23.1792 24.6633C21.9803 25.6321 20.5919 26.3392 19.1034 26.7393Z"
            fill="black"
          />
        </svg>
      </div>
      <div>
        <Title className="mb-3">{title}</Title>
        <Description>{description}</Description>
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
  },
  {
    title: "Resources",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
  },
  {
    title: "Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
  },
  {
    title: "Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
  },
  {
    title: "Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
  },
  {
    title: "Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
  },
];

const ExploreImage = styled.div`
  width: 377.268px;
  height: 426px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #fffefe;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

return (
  <Container>
    <div>
      <ExploreImage />
    </div>
    <div style={{ flex: 1 }}>
      <SectionHeading>Explore Even More</SectionHeading>
      <div className="d-flex flex-wrap" style={{ gap: 40 }}>
        {cards.map((card) => (
          <ExploreCard
            title={card.title}
            description={card.description}
            key={`Opportunity-${Math.random()}`}
          />
        ))}
      </div>
    </div>
  </Container>
);
