import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ParishEditingAnnouncements } from "../../../../constants/parish";
import { bigText, smallText } from "../../../../style/TextSize";
import BtnGoBack from "../../../Global/UI/BtnGoBack";
import TextDetails from "../../../Global/UI/TextDetails";

const ParishAnnouncementEditHeader = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  }, []);
  window.addEventListener("resize", () => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  });
  return (
    <HeadingOfEditingNewsStyle>
      <BtnGoBack windowWidth={windowWidth} minWidthTextVisible={1300} />
      <TextDetails
        text={ParishEditingAnnouncements.heading}
        size={bigText.size}
        weight={bigText.weight}
        align="center"
      />
      {windowWidth > 1300 && (
        <div>
          <TextDetails
            text={ParishEditingAnnouncements.dateText}
            size={smallText.size}
          />
          <TextDetails text={"23.10.2022"} size={smallText.size} />
        </div>
      )}
    </HeadingOfEditingNewsStyle>
  );
};

export default ParishAnnouncementEditHeader;

const HeadingOfEditingNewsStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1300px) {
    justify-content: space-between;
  }
`;
